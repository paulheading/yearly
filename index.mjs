import express from "express";
import fetch from "node-fetch";
import "dotenv/config";

const app = express();
const port = 3000;

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

global.access_token;

app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/authorize", function (req, res) {
  let auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id,
    scope: "user-library-read",
    redirect_uri,
  });

  res.redirect(
    "https://accounts.spotify.com/authorize?" + auth_query_parameters.toString()
  );
});

app.get("/callback", async function (req, res) {
  let { code } = req.query;

  // @ts-ignore
  let body = new URLSearchParams({
    code,
    redirect_uri,
    grant_type: "authorization_code",
  });

  let response = await fetch("https://accounts.spotify.com/api/token", {
    method: "post",
    body,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
  });

  let data = await response.json();

  global.access_token = data.access_token;

  res.redirect("/dashboard");
});

async function getData(endpoint) {
  let response = await fetch("https://api.spotify.com/v1/" + endpoint, {
    method: "get",
    headers: {
      Authorization: "Bearer " + global.access_token,
    },
  });

  let data = await response.json();

  return data;
}

function _forEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callback(element, index);
  }
}

async function TracksSavedThisYear() {
  let stop = false;
  let offset = 0;
  let limit = 20;
  let this_year = [];

  while (!stop) {
    let tracks = await getData("me/tracks?offset=" + String(offset));

    if (!tracks.items) return;

    function callback(item, index) {
      let year_added = item.added_at.slice(0, 4);
      let added_this_year = year_added == "2024";

      if (added_this_year) {
        this_year.push(item.track);
        if (index == 19) offset += limit;
      } else {
        stop = true;
      }
    }

    _forEach(tracks.items, callback);
  }

  return this_year;
}

async function TracksReleasedThisYear() {
  let saved = await TracksSavedThisYear();

  if (!saved) return;

  let released = saved.filter(function (track) {
    let { album } = track;

    let year_released = album.release_date.slice(0, 4);
    let released_this_year = year_released == "2024";

    return released_this_year;
  });

  return released;
}

app.get("/dashboard", async function (req, res) {
  let user = await getData("me");

  // let playlist = await getData("playlists/0ixLhgWxqN5SpVeCTJ75Os");

  // let tracks = await TracksSavedThisYear();

  // let released = await TracksReleasedThisYear();

  // console.log("user: ", user);

  user.first_name = user.display_name.split(" ")[0];

  res.render("dashboard", { user });
});

app.listen(port, function () {
  console.log(`Yearly listening on port ${port}`);
});
