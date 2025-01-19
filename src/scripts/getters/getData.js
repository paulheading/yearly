import { getStore } from "~scripts/getters";

export default async function (endpoint) {
  if (!getStore().access_token) window.location.replace("/");

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, {
    method: "get",
    headers: {
      Authorization: "Bearer " + getStore().access_token,
    },
  });

  let data = await response.json();

  return data;
}
