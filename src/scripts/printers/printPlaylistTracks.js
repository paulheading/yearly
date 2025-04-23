import $ from "~scripts/selectors";
import getStore from "~scripts/getters/getStore";

export default function () {
  let { tracks } = getStore().playlist;
  let template = $.playlist().$track;

  $.playlist().$tracks.forEach(($track) => $track.remove());

  tracks.forEach(function (item, index) {
    template = template.cloneNode(true);

    let { track } = item;
    let { artists } = track;

    let $number = $.playlist_track(template).$number;
    let $name = $.playlist_track(template).$name;
    let $artist_name = $.playlist_track(template).$artist_name;

    $number.innerText = index + 1;

    $name.href = track.external_urls.spotify;
    $name.innerText = track.name;

    $artist_name.href = artists[0].external_urls.spotify;
    $artist_name.innerText = artists[0].name;

    return $.playlist().$main.append(template);
  });
}
