import setColorsIndex from "~scripts/setters/setColorsIndex";
import colors from "~data/colors";

export default function (setting) {
  setting.color = colors.array[colors.index];

  setColorsIndex();

  return setting;
}
