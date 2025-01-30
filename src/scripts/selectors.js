let $ = {
  query: {
    button: (value) => $.query.selector(`button${value}`),
    buttonAll: (value) => $.query.selectorAll(`button${value}`),
    card: (value) => $.query.selector(`.card-container${value}`),
    cardAll: (value) => $.query.selectorAll(`.card-container${value}`),
    cardId: (value) => $.query.cardAll(`[data-id=${value}]`),
    section: (value) => $.query.selector(`[data-section=${value}]`),
    state: (value) => $.query.selector(`[data-state=${value}]`),
    print: (value) => $.query.selector(`[data-print=${value}]`),
    settingAll: (value) => $.query.selectorAll(`.editable.setting${value}`),
    settingType: (value) => $.query.settingAll(`[data-type=${value}]`),
    settingName: (value) => $.query.settingAll(`[data-name=${value}]`),
    selector: (value) => document.querySelector(value),
    selectorAll: (value) => document.querySelectorAll(value),
    selectList: (value) => $.query.selector(`.select-form${value}`),
    selectListAll: (value) => $.query.selectorAll(`.select-form${value}`),
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
        $all: $card.querySelectorAll("li.setting"),
        $toggles: $card.querySelectorAll("li.setting.toggle"),
        $ranges: $card.querySelectorAll("li.setting.range"),
        $selects: $card.querySelectorAll("li.setting.select"),
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

  let id = $card.getAttribute("data-id");

  let isSelected = $card.classList.contains($.state.selected);

  return {
    id,
    isSelected,
    targets,
    selectors,
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

$.setting.selectors = function ($setting) {
  let $span = $setting.querySelector("span");
  let $title = $setting.querySelector(".title");
  let $input = $setting.querySelector("input");
  let $output = $setting.querySelector(".output");
  let $mins = $setting.querySelector(".mins");

  return { $span, $title, $input, $output, $mins };
};

$.button = {
  backs: $.query.buttonAll(".back-button"),
  build: $.query.button(".build-button"),
  custom: $.query.button(".custom-button"),
  infos: $.query.buttonAll(".info-button"),
  login: $.query.button(".login-button"),
  refresh: $.query.button(".refresh-artwork"),
  save: $.query.button(".save-button"),
  selects: $.query.buttonAll(".select-button"),
};

$.section = {
  choose_card: $.query.section("choose-card"),
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

$.selectList = {
  choose_source: $.query.selectList(".choose_source"),
  year_added: $.query.selectList(".year_added"),
  year_released: $.query.selectList(".year_released"),
};

$.selectList.selectors = function ($form) {
  let $list = $form.querySelector(".select-form-list");
  let $items = $form.querySelectorAll(".select-form-item");
  let $button = $form.querySelector(".select-form-button");
  let data = {
    id: $button.getAttribute("data-id"),
    select: $form.getAttribute("data-select"),
  };
  let $announce = $form.querySelector(".select-form-announce");

  return { $list, $items, $button, data, $announce };
};

$.playlist = () => $.query.selector(".outer-window");
$.playlist_name = () => $.playlist().querySelector(".name");
$.playlist_owner = () => $.playlist().querySelector(".owner");
$.playlist_image = () => $.playlist().querySelector("img");
$.playlist_main = () => $.playlist().querySelector("main");
$.playlist_track = () => $.playlist_main().querySelector(".container");
$.playlist_tracks = () => $.playlist_main().querySelectorAll(".container");

export default $;
