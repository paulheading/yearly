import colors from "#data/colors";

export default function () {
  let isLastColor = colors.index + 1 == colors.array.length;
  isLastColor ? (colors.index = 0) : colors.index++;
}
