import snakify from "~scripts/helpers/snakify";
import attrs from "~scripts/selectors/attrs";

export default function (setting, id) {
  setting.data[attrs.data.card] = id;
  setting.data[attrs.data.snake] = snakify(setting.title);
  setting.data[attrs.data.setting] = true;

  if (setting.data[attrs.data.type] == "select") {
    setting.data[attrs.data.state] = "closed";
  }

  return setting;
}
