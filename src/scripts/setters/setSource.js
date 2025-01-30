import $ from "~scripts/selectors";
import store from "~data/store";

export default function () {
  let $form = $.selectList.choose_source;

  let { data } = $.selectList.selectors($form);

  store.selected.source = data.id;
}
