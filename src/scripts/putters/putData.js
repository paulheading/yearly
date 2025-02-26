import getStore from "~scripts/getters/getStore";

export default async function ({ endpoint, body }) {
  let { access_token } = getStore();

  if (!access_token) window.location.replace("/");

  let options = {
    method: "put",
    headers: {
      Authorization: "Bearer " + access_token,
      "Content-Type": "image/jpeg",
    },
    body,
  };

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, options);

  return response;
}
