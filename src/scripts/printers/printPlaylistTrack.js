import $ from "~scripts/selectors";

export default function (item, index, template) {
  template = template.cloneNode(true);

  let { track } = item;
  let { artists } = track;

  let $number = template.querySelector(".number");
  let $name = template.querySelector(".track-name");
  let $artist_name = template.querySelector(".artist-name");

  $number.innerText = index + 1;
  $name.innerText = track.name;
  $artist_name.innerText = artists[0].name;
  $artist_name.href = artists[0].external_urls.spotify;

  $.playlist().$main.append(template);
}
