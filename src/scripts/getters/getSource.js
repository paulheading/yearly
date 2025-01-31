import $ from "~scripts/selectors";

export default function () {
  let $form = $.selectList.choose_source;

  let { data } = $.selectList.selectors($form);

  return data.id;
}
