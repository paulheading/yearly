import getStore from "~scripts/store/getStore";
import setStore from "~scripts/store/setStore";

import { getCurrentUser } from "~scripts/getters";
import { printFirstName } from "~scripts/printers";

export default async function () {
  let user = await getCurrentUser();

  let first_name = user.display_name.split(" ")[0];

  let fields = ["type", "followers", "href", "images", "uri"];

  fields.forEach((field) => delete user[field]);

  setStore(function (store) {
    store.user = {
      ...getStore().user,
      first_name,
      ...user,
    };

    return store;
  });

  printFirstName();
}
