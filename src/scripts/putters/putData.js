import getStore from "#getters/getStore";

export default async function ({ endpoint, body }) {
  let { access } = getStore();

  if (!access.token) window.location.assign("/");

  let options = {
    method: "put",
    headers: {
      Authorization: "Bearer " + access.token,
      "Content-Type": "image/jpeg",
    },
    body,
  };

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, options);

  return response;
}
