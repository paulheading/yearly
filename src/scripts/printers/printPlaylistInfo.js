import $ from "~scripts/selectors";
import getStore from "~scripts/getters/getStore";

export default function () {
  let { user, playlist } = getStore();

  $.playlist().$name.innerText = playlist.name;
  $.playlist().$owner.innerText = user.id;
  $.playlist().$owner.href = user.external_urls.spotify;
}
