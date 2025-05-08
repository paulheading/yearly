import getStore from "#getters/getStore";
import setStore from "#setters/setStore";
import getCurrentUser from "#getters/spotify/getCurrentUser";
import printFirstName from "#printers/printFirstName";

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
