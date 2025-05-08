import getStore from "#getters/getStore";
import listenResponseStatus from "#listeners/listenResponseStatus";

export default async function (endpoint) {
  if (!getStore().access.token) window.location.assign("/");

  let url = "https://api.spotify.com/v1/" + endpoint;

  let options = {
    method: "get",
    headers: {
      Authorization: "Bearer " + getStore().access.token,
    },
  };

  let response = await fetch(url, options).then(listenResponseStatus);

  let data = await response.json();

  return data;
}
