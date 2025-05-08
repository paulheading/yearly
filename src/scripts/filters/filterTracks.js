import filterTracksByConfig from "#filters/filterTracksByConfig";

export default async function (tracks) {
  if (!tracks.length) {
    console.warn("store has no results");
    return tracks;
  }

  return filterTracksByConfig(tracks);
}
