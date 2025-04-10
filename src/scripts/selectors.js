import createQueriesFor from "~scripts/creators/createQueriesFor";
import { button } from "~scripts/selectors/classNames";
import { section, selectForm } from "~scripts/selectors/data";
import attr from "~scripts/selectors/attributes";

let label = {
  button: (value) => attr.button + value,
  card: (value) => attr.card + value,
  selectForm: (value) => attr.selectForm + value,
  data: {
    section: (value) => `[${attr.data.section}=${value}]`,
    setting: (value) => `[${attr.data.setting}='true']${value}`,
    snake: (value) => `[${attr.data.snake}=${value}]`,
    id: (value) => `[${attr.data.id}=${value}]`,
    state: (value) => `[${attr.data.state}=${value}]`,
    print: (value) => `[${attr.data.print}=${value}]`,
    type: (value) => `[${attr.data.type}=${value}]`,
  },
};

let $ = {
  query: {
    button: (value = "") => $.query.selector(label.button("." + value)),
    buttonAll: (value = "") => $.query.selectorAll(label.button("." + value)),
    card: (value = "") => $.query.selector(label.card(value)),
    cardAll: (value = "") => $.query.selectorAll(label.card(value)),
    cardId: (value = "") => $.query.card(label.data.id(value)),
    state: (value = "") => $.query.selector(label.data.state(value)),
    print: (value = "") => $.query.selector(label.data.print(value)),
    section: (value = "") => $.query.selector(label.data.section(value)),
    sectionAll: (value = "") => $.query.selectorAll(label.data.section(value)),
    selector: (value = "") => document.querySelector(value),
    selectorAll: (value = "") => document.querySelectorAll(value),
    selectForm: (value = "") => $.query.selector(label.selectForm(value)),
    selectFormAll: (value = "") => $.query.selectorAll(label.selectForm(value)),
    selectFormSnake: function (value = "") {
      return $.query.selectForm(label.data.snake(value));
    },
    settingAll: function (value = "") {
      return $.query.selectorAll(label.data.setting(value));
    },
    settingType: (value = "") => $.query.settingAll(label.data.type(value)),
  },
};

$.card = {
  badjo: $.query.cardId("badjo"),
  cindy: $.query.cardId("cindy"),
  custom: $.query.cardId("custom"),
};

$.card.selectors = function ($card) {
  let selectors = {
    $config_pic: $card.querySelector("img.profile.config"),
    $dot_buttons: $card.querySelectorAll("button.dot_button"),
    $info_buttons: $card.querySelectorAll("button.info_button"),
    $profile_pics: $card.querySelectorAll("img.profile"),
    $select_button: $card.querySelector("button.select_button"),
    $settings: {
      $lists: $card.querySelectorAll("ul.settings"),
      $items: {
        all: $card.querySelectorAll("li.setting"),
        toggle: $card.querySelectorAll("li.setting.toggle"),
        range: $card.querySelectorAll("li.setting.range"),
        select: $card.querySelectorAll("li.setting.select"),
      },
    },
  };

  let targets = [
    $card,
    $.button.build,
    ...selectors.$dot_buttons,
    ...selectors.$profile_pics,
    ...selectors.$info_buttons,
    selectors.$select_button,
  ];

  let state = {
    id: $card.getAttribute(attr.data.id),
    selected: $card.classList.contains($.state.selected),
  };

  return {
    state,
    targets,
    ...selectors,
  };
};

$.loaded = $.query.state("loaded");
$.not_loaded = $.query.state("not_loaded");

$.state = {
  selected: "selected-state",
};

$.setting = {
  toggles: $.query.settingType("toggle"),
  ranges: $.query.settingType("range"),
  selects: $.query.settingType("select"),
};

createQueriesFor($, "button", button);
createQueriesFor($, "section", section);

$.selectForm = {
  choose_source: $.query.selectFormSnake(selectForm.choose_source),
  year_added: $.query.selectFormSnake(selectForm.year_added),
  year_released: $.query.selectFormSnake(selectForm.year_released),
};

$.print = {
  banner: $.query.print(section.banner),
  first_name: $.query.print("first_name"),
  share_link: $.query.print("share-link"),
  since: $.query.print("since"),
  tracks_added: $.query.print(section.tracks_added),
  year_added: $.query.print("year-added"),
};

$.selectForm.selectors = function ($form) {
  let $list = $form.querySelector(".select-form-list");
  let $items = $form.querySelectorAll(".select-form-item");
  let $button = $form.querySelector(".select-form-button");
  let $announce = $form.querySelector(".select-form-announce");

  let data = {
    id: $button.getAttribute(attr.data.id),
    snake: $form.getAttribute(attr.data.snake),
    state: $form.getAttribute(attr.data.state),
    group: $form.getAttribute(attr.data.group),
    card: $form.getAttribute(attr.data.card),
  };

  return { $list, $items, $button, $announce, data };
};

$.playlist = function () {
  let $window = $.query.selector(".outer-window");
  let $name = $window.querySelector(".wrap-name").children[0];
  let $owner = $window.querySelector(".wrap-owner").children[0];
  let $image = $window.querySelector("img");
  let $main = $window.querySelector("main");
  let $track = $main.querySelector(".container");
  let $tracks = $main.querySelectorAll(".container");

  return { $window, $name, $owner, $image, $main, $track, $tracks };
};

$.playlist_track = function ($track) {
  let $number = $track.querySelector(".number");
  let $name = $track.querySelector(".wrap-track-name").children[0];
  let $artist_name = $track.querySelector(".wrap-artist-name").children[0];

  return {
    $number,
    $name,
    $artist_name,
  };
};

export default $;
