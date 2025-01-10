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
$.cards = $.querySelectorAll(".card-container");
$.sliders = $.querySelectorAll(".slider");

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
    $settings_lists: $card.querySelectorAll("ul.settings"),
    $settings_items: $card.querySelectorAll("li.setting"),
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
  login: $.querySelector(".login-button"),
  info: $.querySelectorAll(".info-button"),
  custom: $.querySelector(".custom-button"),
  select: $.querySelectorAll(".select-button"),
  build: $.querySelector(".build-button"),
  back: $.querySelectorAll(".back-button"),
  save: $.querySelector(".save-button"),
};

$.sections = {
  choose_card: $.querySection("choose-card"),
  save_playlist: $.querySection("save-playlist"),
  share_playlist: $.querySection("share-playlist"),
  empty_playlist: $.querySection("empty-playlist"),
  recommend_tracks: $.querySection("recommend-tracks"),
  tracks_added: $.querySection("tracks-added"),
  custom: $.querySection("custom"),
  playlist: $.querySection("playlist"),
};

$.print = {
  first_name: $.queryPrint("first_name"),
  share_link: $.queryPrint("share-link"),
  tracks_added: $.queryPrint("tracks-added"),
};

$.playlist = () => $.querySelector(".outer-window");
$.playlist_name = () => $.playlist().querySelector(".name");
$.playlist_owner = () => $.playlist().querySelector(".owner");
$.playlist_image = () => $.playlist().querySelector("img");
$.playlist_main = () => $.playlist().querySelector("main");
$.playlist_track = () => $.playlist_main().querySelector(".container");
$.playlist_tracks = () => $.playlist_main().querySelectorAll(".container");

$.select_forms = () => $.querySelectorAll(".select-form");

$.formSelectors = function ($form) {
  let $list = $form.querySelector(".select-form-list");
  let $items = $form.querySelectorAll(".select-form-item");
  let $button = $form.querySelector(".select-form-button");
  let $announce = $form.querySelector(".select-form-announce");

  return { $list, $items, $button, $announce };
};

export default $;
