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
  custom: $.querySection("custom"),
  playlist: $.querySection("playlist"),
};

$.print = {
  firstname: $.queryPrint("firstname"),
  share_link: $.queryPrint("share-link"),
};

$.playlist = {
  outer: $.querySelector(".outer-window"),
  name: $.querySelector(".outer-window .name"),
  owner: $.querySelector(".outer-window .owner"),
  tracks: $.querySelectorAll(".outer-window main .container"),
};

export default $;
