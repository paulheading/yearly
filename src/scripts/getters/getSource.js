import $ from "~scripts/selectors";

export default function () {
  let $form = $.selectList.choose_source;

  console.log("form: ", $form);

  let { data } = $.selectList.selectors($form);

  return data.id;
}
