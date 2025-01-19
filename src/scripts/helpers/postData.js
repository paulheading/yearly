import { getStore } from "~scripts/getters";

export default async function (endpoint, body) {
  if (!getStore().access_token) window.location.replace("/");

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, {
    method: "post",
    headers: {
      Authorization: "Bearer " + getStore().access_token,
    },
    body: JSON.stringify({ ...body }),
  });

  let data = await response.json();

  return data;
}
