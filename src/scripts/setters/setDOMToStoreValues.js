import $ from "~scripts/selectors";
import getStore from "~scripts/getters/getStore";
import setCustomConfig from "~scripts/setters/setCustomConfig";
import setChooseSourceRows from "./setChooseSourceRows";

import { toggleSelectedCard } from "~scripts/listeners/listenSelectButton";
import { switchToCustom } from "~scripts/listeners/listenCustomButton";

function setActiveCard(style) {
  let $card = $.card[style];

  let { state } = $.card.selectors($card);

  toggleSelectedCard({ state, $card });

  if (style != "custom") return;

  switchToCustom($.button.custom);

  setCustomConfig();
}

function setActiveSources(sources) {
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
