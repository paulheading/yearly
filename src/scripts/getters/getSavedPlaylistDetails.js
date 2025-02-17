import getData from "~scripts/getters/getData";
import getStore from "~scripts/store/getStore";
import filterUserPlaylists from "~scripts/filters/filterUserPlaylists";

export default async function () {
  let { user } = getStore();
  let userPlaylists = "users/" + user.id + "/playlists";

  return getData(userPlaylists).then(filterUserPlaylists);
}
