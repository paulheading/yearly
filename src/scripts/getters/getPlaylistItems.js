import getData from "~scripts/getters/getData";

export default async (id) => await getData(`playlists/${id}/tracks`);
