import $ from "~scripts/selectors";

export default function (item, index, template) {
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

  $.playlist().$main.append(template);
}
