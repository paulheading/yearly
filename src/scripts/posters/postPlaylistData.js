import getStore from "~scripts/store/getStore";
import postData from "~scripts/posters/postData";

export default function () {
  let path = "users/" + getStore().user.id + "/playlists";

  let details = {
    name: getStore().create.playlist.name,
    description: "Yearly generated playlist",
    public: false,
  };

  return postData(path, { ...details });
}
