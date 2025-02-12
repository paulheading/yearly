import $ from "~scripts/selectors";
import setStore from "~scripts/store/setStore";

export default function () {
  let $form = $.selectList.choose_source;

  let { data } = $.selectList.selectors($form);

  setStore(function (store) {
    store.selected.source = data.id;
    return store;
  });
}
