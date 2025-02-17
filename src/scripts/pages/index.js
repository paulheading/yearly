import { getAuth } from "~scripts/getters";
import { usingLiveData } from "~scripts/helpers";
import $ from "~scripts/selectors";
import createStore from "~scripts/store/createStore";
import getStore from "~scripts/store/getStore";

$.button.login.addEventListener("click", function () {
  if (!getStore()) createStore();
  usingLiveData ? getAuth() : window.location.replace("/build");
});
