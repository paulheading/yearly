import createQueriesFor from "~scripts/creators/createQueriesFor";
import cnames from "~scripts/selectors/cnames";
import data from "~scripts/selectors/data";
import attrs from "~scripts/selectors/attrs";
import label from "~scripts/selectors/labels";

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
    className: (value = "") => $.query.selector("." + value),
    classNameAll: (value = "") => $.query.selectorAll("." + value),
    selectorAll: (value = "") => document.querySelectorAll(value),
    selectForm: (value = "") => $.query.selector(label.selectForm(value)),
    selectFormAll: (value = "") => $.query.selectorAll(label.selectForm(value)),
    selectFormSnake: function (value = "") {
      return $.query.selectForm(label.data.snake(value));
    },
    selectFormAllSnake: function (value = "") {
      return $.query.selectFormAll(label.data.snake(value));
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
    id: $card.getAttribute(attrs.data.id),
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

createQueriesFor($, "button", cnames.button);
createQueriesFor($, "section", data.section);

$.selectForm = {
  choose_sources: function () {
    return $.query.selectFormAllSnake(data.selectForm.choose_source);
  },
  year_added: $.query.selectFormSnake(data.selectForm.year_added),
  year_released: $.query.selectFormSnake(data.selectForm.year_released),
};

$.print = {
  banner: $.query.print(data.section.banner),
  first_name: $.query.print("first_name"),
  share_link: $.query.print("share-link"),
  since: $.query.print("since"),
  tracks_added: $.query.print(data.section.tracks_added),
  year_added: $.query.print("year-added"),
};

$.selectForm.selectors = function ($form) {
  let selectors = {
    $button: $form.querySelector("." + cnames.selectForm.button),
    $list: $form.querySelector("." + cnames.selectForm.list),
    $items: $form.querySelectorAll("." + cnames.selectForm.item),
    $announce: $form.querySelector("." + cnames.selectForm.announce),
  };

  selectors.data = {
    id: selectors.$button.getAttribute(attrs.data.id),
    snake: $form.getAttribute(attrs.data.snake),
    state: $form.getAttribute(attrs.data.state),
    group: $form.getAttribute(attrs.data.group),
    card: $form.getAttribute(attrs.data.card),
  };

  selectors.state = {
    isClosed: () => selectors.data.state == "closed",
  };

  selectors.click = {
    insideButton: (target) => selectors.$button.contains(target),
    insideList: (target) => selectors.$list.contains(target),
  };

  return selectors;
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
