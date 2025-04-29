import getStore from "~scripts/getters/getStore";
import setStore from "~scripts/setters/setStore";
import getCurrentUser from "~scripts/getters/spotify/getCurrentUser";
import printFirstName from "~scripts/printers/printFirstName";

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
