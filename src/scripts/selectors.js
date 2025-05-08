import $ from "paully/selectors";

import createQueriesFor from "#creators/createQueriesFor";
import cnames from "#selectors/cnames";
import data from "#selectors/data";
import query from "#selectors/queries";
import card from "#selectors/card";
import print from "#selectors/print";

$.query = { ...$.query, ...query };
$.card = card;
$.print = print;

$.loaded = $.query.state("loaded");
$.not_loaded = $.query.state("not_loaded");

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
