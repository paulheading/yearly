export default async function () {
  console.warn("creating new token");
  return setAccessToken().then(setUser).then(getPlaylists);
}
