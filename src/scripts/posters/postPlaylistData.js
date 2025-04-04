import getStore from "~scripts/getters/getStore";
import postData from "~scripts/posters/postData";

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
