import attrs from "~scripts/selectors/attrs";

export default function (setting, index) {
  let classNames = ["setting", setting.data[attrs.data.type]];

  classNames.push(index % 2 ? "even" : "odd");

  classNames.push(setting.editable ? "editable" : "noneditable");

  return classNames.join(" ");
}
