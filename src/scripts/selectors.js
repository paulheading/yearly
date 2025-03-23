import $cy from "~scripts/selectors/$cy";

let $ = {
  query: {
    button: (value = "") => $.query.selector(`button${value}`),
    buttonAll: (value = "") => $.query.selectorAll(`button${value}`),
    card: (value = "") => $.query.selector(`.card-container${value}`),
    cardAll: (value = "") => $.query.selectorAll(`.card-container${value}`),
    cardId: (value = "") => $.query.card(`[data_id=${value}]`),
    state: (value = "") => $.query.selector(`[data-state=${value}]`),
    print: (value = "") => $.query.selector(`[data-print=${value}]`),
    section: (value = "") => $.query.selector(`[data-section=${value}]`),
    selector: (value = "") => document.querySelector(value),
    selectorAll: (value = "") => document.querySelectorAll(value),
    selectForm: (value = "") => $.query.selector(`.select-form${value}`),
    selectFormAll: (value = "") => $.query.selectorAll(`.select-form${value}`),
    selectFormSnake: function (value = "") {
      return $.query.selectForm(`[data_snake=${value}]`);
    },
    settingAll: function (value = "") {
      return $.query.selectorAll(`[data_setting='true']${value}`);
    },
    settingType: (value = "") => $.query.settingAll(`[data_type=${value}]`),
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
    $dot_buttons: $card.querySelectorAll("button.dot-button"),
    $info_buttons: $card.querySelectorAll("button.info-button"),
    $profile_pics: $card.querySelectorAll("img.profile"),
    $select_button: $card.querySelector("button.select-button"),
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
    id: $card.getAttribute("data_id"),
    selected: $card.classList.contains($.state.selected),
  };

  return {
    state,
    targets,
    ...selectors,
  };
};

$.loaded = $.query.state("loaded");
$.not_loaded = $.query.state("not-loaded");

$.state = {
  selected: "selected-state",
};

$.setting = {
  toggles: $.query.settingType("toggle"),
  ranges: $.query.settingType("range"),
  selects: $.query.settingType("select"),
};

$.button = {
  backs: $.query.buttonAll($cy.button.back),
  build: $.query.button($cy.button.build),
  custom: $.query.button(".custom-button"),
  dots: $.query.buttonAll($cy.button.dot),
  infos: $.query.buttonAll(".info-button"),
  login: $.query.button($cy.button.login),
  refresh: $.query.button(".refresh-artwork"),
  save: $.query.button(".save-button"),
  selects: $.query.buttonAll($cy.button.select),
};

$.section = {
  choose_card: $.query.section("choose-card"),
  confirm_settings: $.query.section("confirm-settings"),
  custom: $.query.section("custom"),
  empty_playlist: $.query.section("empty-playlist"),
  playlist: $.query.section("playlist"),
  recommend_tracks: $.query.section("recommend-tracks"),
  save_playlist: $.query.section("save-playlist"),
  share_playlist: $.query.section("share-playlist"),
  tracks_added: $.query.section("tracks-added"),
};

$.print = {
  first_name: $.query.print("first_name"),
  share_link: $.query.print("share-link"),
  tracks_added: $.query.print("tracks-added"),
  year_added: $.query.print("year-added"),
};

$.selectForm = {
  choose_source: $.query.selectFormSnake($cy.selectForm.choose_source),
  year_added: $.query.selectFormSnake($cy.selectForm.year_added),
  year_released: $.query.selectFormSnake($cy.selectForm.year_released),
};

$.selectForm.selectors = function ($form) {
  let $list = $form.querySelector(".select-form-list");
  let $items = $form.querySelectorAll(".select-form-item");
  let $button = $form.querySelector(".select-form-button");
  let $announce = $form.querySelector(".select-form-announce");

  let data = {
    id: $button.getAttribute("data_id"),
    snake: $form.getAttribute("data_snake"),
    state: $form.getAttribute("data_state"),
    group: $form.getAttribute("data_group"),
    card: $form.getAttribute("data_card"),
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
