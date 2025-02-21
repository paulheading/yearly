import getStore from "~scripts/store/getStore";
import postData from "~scripts/posters/postData";

export default function () {
  let { user, create } = getStore();

  let endpoint = "users/" + user.id + "/playlists";

  let { name, description } = create.playlist;

  let body = {
    name,
    description,
    public: false,
  };

  return postData({ endpoint, body });
}
