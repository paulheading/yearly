import getArtist from "~scripts/getters/musicbrainz/getArtist";
import getQuery from "~scripts/getters/musicbrainz/getQuery";
import createMusicBrainzDelay from "~scripts/creators/createMusicBrainzDelay";

export default function (items) {
  items.forEach(function (item, index) {
    let { track } = item;
    let { artists } = track;

    track.gender_score = 0;

    setTimeout(function () {
      artists.forEach(async function (artist) {
        getQuery(artist.name).then(async function (res) {
          let { type, id } = res;

          let artist = await getArtist(id);

          if (type == "Person") {
            let { name, gender } = artist;
            console.log("artist: ", name, gender);

            if (gender == "Female") track.gender_score++;
            if (gender == "Male") track.gender_score--;

            return;
          }

          let { relations } = artist;

          relations.forEach(function (relation, index) {
            setTimeout(async function () {
              let artist = await getArtist(relation.artist.id);
              let { name, gender } = artist;
              console.log("relation: ", name, gender);
              if (gender == "Female") track.gender_score++;
              if (gender == "Male") track.gender_score--;
            }, createMusicBrainzDelay(index));
          });
        });
      });
    }, createMusicBrainzDelay(index));
  });

  return items;
}
