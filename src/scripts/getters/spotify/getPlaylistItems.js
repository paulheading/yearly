import getData from "~scripts/getters/spotify/getData";

export default async (id) => await getData(`playlists/${id}/tracks`);
