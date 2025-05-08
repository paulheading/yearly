import getData from "#getters/spotify/getData";
import getStore from "#getters/getStore";
import filterUserPlaylists from "#filters/filterUserPlaylists";

export default async function () {
  let { user } = getStore();
  let userPlaylists = "users/" + user.id + "/playlists";

  return getData(userPlaylists).then(filterUserPlaylists);
}
