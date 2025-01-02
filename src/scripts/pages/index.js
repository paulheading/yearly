import { usingLiveData } from "~scripts/helpers";
import $ from "~scripts/selectors";
import get from "~scripts/getters";

$.buttons.login.addEventListener("click", function () {
  usingLiveData ? get.authorization() : window.location.replace("/callback");
});
