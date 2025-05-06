import createQueriesFor from "~scripts/creators/createQueriesFor";
import cnames from "~scripts/selectors/cnames";
import data from "~scripts/selectors/data";
import attrs from "~scripts/selectors/attrs";
import $ from "~scripts/selectors/queries";

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

$.selectForm.choose_sources = function () {
  return $.query.selectFormSnakeAll(data.selectForm.choose_source);
};

$.selectForm.year_added = $.query.selectFormSnake(data.selectForm.year_added);

$.selectForm.year_released = $.query.selectFormSnake(
  data.selectForm.year_released
);

$.print = {
  banner: $.query.print(data.section.banner),
  first_name: $.query.print("first_name"),
  share_link: $.query.print("share-link"),
  since: $.query.print("since"),
  tracks_added: $.query.print(data.section.tracks_added),
  year_added: $.query.print("year-added"),
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
