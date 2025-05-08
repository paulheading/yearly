import $ from "#selectors";

export default function () {
  let { data } = $.selectForm.selectors($.selectForm.year_released);

  return data.id;
}
