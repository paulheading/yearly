import $ from "~scripts/selectors";

function cloneTrack(index) {
  let $track = $.playlist_track().cloneNode(true);
  let $number = $track.querySelector(".number");
  $number.innerText = index + 1;
  $.playlist_main().append($track);
}

export default function (item, index) {
  if (index > 0) cloneTrack(index);

  let $track = $.playlist_tracks()[index];

  let $track_name = $track.querySelector(".track-name");
  let $artist_name = $track.querySelector(".artist-name");

  $track_name.innerText = item.track.name;
  $artist_name.innerText = item.track.artists[0].name;
  $artist_name.href = item.track.artists[0].external_urls.spotify;
}
