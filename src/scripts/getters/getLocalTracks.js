import liked from "#data/tracks/liked";
import setTracksAdded from "#setters/setTracksAdded";

export default function () {
  let params = {
    items: liked,
    year_added: 2024,
  };

  return setTracksAdded(params);
}
