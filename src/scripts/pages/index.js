import { getAuth } from "~scripts/getters";
import { is } from "~scripts/helpers";
import $ from "~scripts/selectors";
import createStore from "~scripts/creators/createStore";
import getStore from "~scripts/getters/getStore";

$.button.login.addEventListener("click", function () {
  if (!getStore()) createStore();
  is.dataLive ? getAuth() : window.location.assign("/build");
});
