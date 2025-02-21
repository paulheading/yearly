import { include } from "~scripts/filters";
import filterCardsByPlaylistId from "~scripts/filters/filterCardsByPlaylistId";

export default function (value) {
  let playlist = filterCardsByPlaylistId(value);

  let config = playlist.content.filter(include.typeConfig);

  return config[0].settings;
}
