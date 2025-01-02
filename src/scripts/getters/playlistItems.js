export default async function (id) {
  return await getData(`playlists/${id}/tracks`);
}
