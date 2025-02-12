import getStore from "~scripts/store/getStore";
import { include } from "~scripts/filters";

export default function (value) {
  let playlist = value
    ? getStore().query.card[value]
    : getStore().cards.filter(include.playlistId)[0];

  let config = playlist.content.filter(include.typeConfig);

  return config[0].settings;
}
