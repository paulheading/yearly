import getData from "#getters/spotify/getData";

export default async (id) => await getData(`playlists/${id}/tracks`);
