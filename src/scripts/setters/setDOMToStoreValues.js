import $ from "#selectors";
import getStore from "#getters/getStore";
import setCustomConfig from "#setters/setCustomConfig";
import setChooseSourceRows from "./setChooseSourceRows";

import { toggleSelectedCard } from "#listeners/listenSelectButton";
import { switchToCustom } from "#listeners/listenCustomButton";

function setActiveCard(style) {
  let $card = $.card[style];

  let { state } = $.card.selectors($card);

  toggleSelectedCard({ state, $card });

  if (style != "custom") return;

  switchToCustom($.button.custom);

  setCustomConfig();
}

function setActiveSources(sources) {
  if (sources.length == 1) {
    if (sources[0].id == 0) return;
  }

  sources.forEach(function (source) {
    setChooseSourceRows($.button.source, source);
  });
}

export default function () {
  let { playlist } = getStore();

  setActiveSources(playlist.sources);

  if (!playlist.style) return;

  setActiveCard(playlist.style);
}
