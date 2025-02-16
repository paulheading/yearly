import { getAuthorization } from "~scripts/getters";
import { usingLiveData } from "~scripts/helpers";
import $ from "~scripts/selectors";
import createStore from "~scripts/store/createStore";

$.button.login.addEventListener("click", function () {
  createStore();
  usingLiveData ? getAuthorization() : window.location.replace("/build");
});
