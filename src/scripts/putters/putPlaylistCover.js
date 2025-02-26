import imageToBase64 from "image-to-base64/browser";
import putData from "~scripts/putters/putData";
import getStore from "~scripts/getters/getStore";
import { is } from "~scripts/helpers";

export default async function (playlist) {
  let { id } = playlist;

  let { image } = getStore().playlist;

  let endpoint = "playlists/" + id + "/images";

  if (is.siteLocal) image = "../../../public" + image;

  let body = await imageToBase64(image);

  return putData({ endpoint, body });
}
