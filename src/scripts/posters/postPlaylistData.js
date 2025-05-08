import getStore from "#getters/getStore";
import postData from "#posters/postData";

export default function () {
  let { user, playlist } = getStore();

  let endpoint = "users/" + user.id + "/playlists";

  let { name, description } = playlist;

  let body = {
    name,
    description,
    public: false,
  };

  return postData({ endpoint, body });
}
