import { getAuth } from "~scripts/getters";
import { is } from "~scripts/helpers";
import $ from "~scripts/selectors";
import createStore from "~scripts/store/createStore";
import getStore from "~scripts/store/getStore";

import store from "~data/store";

$.button.login.addEventListener("click", function () {
  if (!getStore()) createStore();
  is.dataLive ? getAuth() : window.location.replace("/build");
});
