import getStore from "~scripts/getters/getStore";

export default async function ({ endpoint, body }) {
  let { access_token } = getStore();

  if (!access_token) window.location.assign("/");

  let options = {
    method: "post",
    headers: {
      Authorization: "Bearer " + access_token,
    },
    body: JSON.stringify({ ...body }),
  };

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, options);

  let data = await response.json();

  return data;
}
