import $ from "~scripts/selectors";

export default function (value) {
  $.print.tracks_added.innerText =
    typeof value === "number"
      ? value
      : Number($.print.tracks_added.innerText) + 1;
}
