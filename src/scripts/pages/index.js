import { getAuthorization } from "~scripts/getters";
import { usingLiveData } from "~scripts/helpers";
import $ from "~scripts/selectors";

$.button.login.addEventListener("click", function () {
  usingLiveData ? getAuthorization() : window.location.replace("/callback");
});
