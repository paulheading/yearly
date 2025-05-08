import query from "#selectors/queries";
import cnames from "#selectors/cnames";
import data from "#selectors/data";
import attrs from "#selectors/attrs";

let card = {
  badjo: query.cardId(data.card.badjo),
  cindy: query.cardId(data.card.cindy),
  custom: query.cardId(data.card.custom),
};

card.selectors = function ($card) {
  let selectors = {
    $config_pic: $card.querySelector("img.profile.config"),
    $dot_buttons: $card.querySelectorAll("button.dot_button"),
    $info_buttons: $card.querySelectorAll("button.info_button"),
    $profile_pics: $card.querySelectorAll("img.profile"),
    $select_button: $card.querySelector("button.select_button"),
    settings: {
      $lists: $card.querySelectorAll("ul.settings"),
      items: {
        $all: $card.querySelectorAll("li.setting"),
        $toggle: $card.querySelectorAll("li.setting.toggle"),
        $range: $card.querySelectorAll("li.setting.range"),
        $select: $card.querySelectorAll("li.setting.select"),
      },
    },
  };

  let targets = [
    $card,
    ...selectors.$dot_buttons,
    ...selectors.$profile_pics,
    ...selectors.$info_buttons,
    selectors.$select_button,
  ];

  let state = {
    id: $card.getAttribute(attrs.data.id),
    selected: $card.classList.contains(cnames["selected-state"]),
  };

  return {
    state,
    targets,
    ...selectors,
  };
};

export default card;
