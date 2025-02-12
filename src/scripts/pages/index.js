import { getAuthorization } from "~scripts/getters";
import { usingLiveData } from "~scripts/helpers";
import $ from "~scripts/selectors";
import createStore from "~scripts/store/createStore";
// import getStore from "~scripts/store/getStore";

createStore();

$.button.login.addEventListener("click", function () {
  usingLiveData ? getAuthorization() : window.location.replace("/build");
});
