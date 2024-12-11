import { getAuthorization, useLiveData } from "~scripts/services";
import $ from "~scripts/selectors";

$.buttons.login.addEventListener("click", function () {
  useLiveData ? getAuthorization() : window.location.replace("/callback");
});
