import snakify from "~scripts/helpers/snakify";
import attrs from "~scripts/selectors/attrs";
import setColorsIndex from "~scripts/setters/setColorsIndex";
import colors from "~data/colors";

export default function (setting, id) {
  setting.data[attrs.data.card] = id;
  setting.data[attrs.data.snake] = snakify(setting.title);
  setting.data[attrs.data.setting] = true;
  setting.data[attrs.data.color] = colors.array[colors.index];

  setColorsIndex();

  if (setting.data[attrs.data.type] == "select") {
    setting.data[attrs.data.state] = "closed";
  }

  return setting;
}
