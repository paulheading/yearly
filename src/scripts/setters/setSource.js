import $ from "~scripts/selectors";
import setStore from "~scripts/setters/setStore";

export default function () {
  let $form = $.selectForm.choose_source;

  let { data } = $.selectForm.selectors($form);

  setStore(function (store) {
    store.playlist.source = data.id;
    return store;
  });
}
