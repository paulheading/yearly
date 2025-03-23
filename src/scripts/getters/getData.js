import getStore from "~scripts/getters/getStore";

export default async function (endpoint) {
  // if (!getStore().access.token) window.location.assign("/");

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, {
    method: "get",
    headers: {
      Authorization: "Bearer " + getStore().access.token,
    },
  });

  let data = await response.json();

  return data;
}
