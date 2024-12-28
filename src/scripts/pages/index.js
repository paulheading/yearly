import { getAuthorization, usingLiveData } from "~scripts/services";
import $ from "~scripts/selectors";

$.buttons.login.addEventListener("click", function () {
  usingLiveData ? getAuthorization() : window.location.replace("/callback");
});
