import $ from "~scripts/selectors";
import { getData } from "~scripts/services";
import store from "~data/store";

export default async function () {
  let user = await getData("me");

  let first_name = user.display_name.split(" ")[0];

  let fields = ["type", "followers", "href", "images", "uri"];

  fields.forEach((field) => delete user[field]);

  store.user = {
    ...store.user,
    first_name,
    ...user,
  };

  $.print.first_name.innerText = store.user.first_name;
}
