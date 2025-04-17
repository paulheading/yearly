import $ from "~scripts/selectors";
import getStore from "~scripts/getters/getStore";
import setCustomConfig from "~scripts/setters/setCustomConfig";
import setItemsByValue from "~scripts/setters/setItemsByValue";

import { toggleSelectedCard } from "~scripts/listeners/listenSelectButton";
import { switchToCustom } from "~scripts/listeners/listenCustomButton";

export default function () {
  let { style, source } = getStore().playlist;

  if (!style) return;

  if (source.id != 0) {
    let $form = $.selectForm.choose_sources()[0];
    let value = source.id;

    setItemsByValue({ $form, value });
  }

  let $card = $.card[style];

  let { state } = $.card.selectors($card);

  toggleSelectedCard({ state, $card });

  if (style != "custom") return;

  switchToCustom($.button.custom);

  setCustomConfig();
}
