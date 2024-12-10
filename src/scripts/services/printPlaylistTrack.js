import $ from "~scripts/selectors";
import store from "~data/store";

export default function (item, index) {
  let clone = store.saved.track.cloneNode(true);

  let track_number = clone.querySelector(".number");
  let track_name = clone.querySelector(".track-name");
  let artist_name = clone.querySelector(".artist-name");

  track_number.innerText = index + 1;
  track_name.innerText = item.track.name;
  artist_name.innerText = item.track.artists[0].name;
  artist_name.href = item.track.artists[0].external_urls.spotify;

  $.playlist_main().append(clone);
}
