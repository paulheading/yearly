let $ = {
  querySelector: (value) => document.querySelector(value),
  querySelectorAll: (value) => document.querySelectorAll(value),
  querySection: (value) => $.querySelector(`[data-section=${value}]`),
  queryState: (value) => $.querySelector(`[data-state=${value}]`),
  queryPrint: (value) => $.querySelector(`[data-print=${value}]`),
};

$.body = $.querySelector("body");
$.loaded = $.queryState("loaded");
$.not_loaded = $.queryState("not-loaded");
$.sliders = $.querySelectorAll(".slider");

$.cards = {
  all: $.querySelectorAll(".card-container"),
};

$.cards.find = function (value) {
  for (let index = 0; index < $.cards.all.length; index++) {
    let card = $.cards.all[index];
    if (card.getAttribute("data-id") == value) return card;
  }
};

$.cards.badjo = $.cards.find("badjo");
$.cards.cindy = $.cards.find("cindy");
$.cards.custom = $.cards.find("custom");

$.selected_state = "selected-state";

$.settingSelectors = function ($setting) {
  let $span = $setting.querySelector("span");
  let $title = $setting.querySelector(".title");
  let $input = $setting.querySelector("input");
  let $output = $setting.querySelector(".output");
  let $mins = $setting.querySelector(".mins");

  return { $span, $title, $input, $output, $mins };
};

$.cardSelectors = function ($card) {
  let selectors = {
    $config_pic: $card.querySelector("img.profile.config"),
    $dot_buttons: $card.querySelectorAll("button.dot-button"),
    $info_buttons: $card.querySelectorAll("button.info-button"),
    $profile_pics: $card.querySelectorAll("img.profile"),
    $select_button: $card.querySelector("button.select-button"),
    $settings: {
      $lists: $card.querySelectorAll("ul.settings"),
      $items: {
        $all: $card.querySelectorAll("li.setting"),
        $toggles: $card.querySelectorAll("li.setting.toggle"),
        $ranges: $card.querySelectorAll("li.setting.range"),
        $selects: $card.querySelectorAll("li.setting.select"),
      },
    },
  };

  let targets = [
    $card,
    $.buttons.build,
    ...selectors.$dot_buttons,
    ...selectors.$profile_pics,
    ...selectors.$info_buttons,
    selectors.$select_button,
  ];

  return {
    id: $card.getAttribute("data-id"),
    isSelected: $card.classList.contains($.selected_state),
    targets,
    selectors,
  };
};

$.buttons = {
  back: $.querySelectorAll(".back-button"),
  build: $.querySelector(".build-button"),
  custom: $.querySelector(".custom-button"),
  info: $.querySelectorAll(".info-button"),
  login: $.querySelector(".login-button"),
  refresh: $.querySelector(".refresh-artwork"),
  save: $.querySelector(".save-button"),
  select: $.querySelectorAll(".select-button"),
};

$.sections = {
  choose_card: $.querySection("choose-card"),
  custom: $.querySection("custom"),
  empty_playlist: $.querySection("empty-playlist"),
  playlist: $.querySection("playlist"),
  recommend_tracks: $.querySection("recommend-tracks"),
  save_playlist: $.querySection("save-playlist"),
  share_playlist: $.querySection("share-playlist"),
  tracks_added: $.querySection("tracks-added"),
};

$.print = {
  first_name: $.queryPrint("first_name"),
  share_link: $.queryPrint("share-link"),
  tracks_added: $.queryPrint("tracks-added"),
  year_added: $.queryPrint("year-added"),
};

$.playlist = () => $.querySelector(".outer-window");
$.playlist_name = () => $.playlist().querySelector(".name");
$.playlist_owner = () => $.playlist().querySelector(".owner");
$.playlist_image = () => $.playlist().querySelector("img");
$.playlist_main = () => $.playlist().querySelector("main");
$.playlist_track = () => $.playlist_main().querySelector(".container");
$.playlist_tracks = () => $.playlist_main().querySelectorAll(".container");

$.select_forms = () => $.querySelectorAll(".select-form");
$.select_source = () => $.querySelector(".select-form.choose-source");
$.select_year = () => $.querySelector(".select-form.choose-year");

$.formSelectors = function ($form) {
  let $list = $form.querySelector(".select-form-list");
  let $items = $form.querySelectorAll(".select-form-item");
  let $button = $form.querySelector(".select-form-button");
  let data = $button.getAttribute("data-id");
  let $announce = $form.querySelector(".select-form-announce");

  return { $list, $items, $button, data, $announce };
};

export default $;
