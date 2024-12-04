import $ from "~scripts/selectors";
import { getData } from "~scripts/services";
import store from "~data/store";

export default async function () {
  let user = await getData("me");

  store.user = {
    ...user,
    first_name: user.display_name.split(" ")[0],
  };

  $.print.firstname.innerText = store.user.first_name;
}
