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
  empty_playlist: $.querySection("empty-playlist"),
  recommend_tracks: $.querySection("recommend-tracks"),
  tracks_added: $.querySection("tracks-added"),
  custom: $.querySection("custom"),
  playlist: $.querySection("playlist"),
};

$.print = {
  firstname: $.queryPrint("firstname"),
  share_link: $.queryPrint("share-link"),
  tracks_added: $.queryPrint("tracks-added"),
};

$.playlist = () => $.querySelector(".outer-window");
$.playlist_name = () => $.playlist().querySelector(".name");
$.playlist_owner = () => $.playlist().querySelector(".owner");
$.playlist_main = () => $.playlist().querySelector("main");
$.playlist_track = () => $.playlist_main().querySelector(".container");
$.playlist_tracks = () => $.playlist_main().querySelectorAll(".container");

export default $;
