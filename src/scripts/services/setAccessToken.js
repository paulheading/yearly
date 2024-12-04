import { Buffer } from "buffer";
import store from "~data/store";

export default async function () {
  let url_params = new URLSearchParams(window.location.search);
  let code = url_params.get("code");

  let client_id = import.meta.env.PUBLIC_CLIENT_ID;
  let client_secret = import.meta.env.PUBLIC_CLIENT_SECRET;
  let redirect_uri = import.meta.env.PUBLIC_REDIRECT_URI;

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

  store.access_token = data.access_token;
}
