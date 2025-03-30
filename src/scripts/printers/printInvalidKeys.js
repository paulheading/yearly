export default function (invalids) {
  let multiple = invalids.length > 1;

  let result = "Param";

  if (multiple) result += "s";

  function printInvalid(key, index) {
    if (index > 0) result += ",";

    result += " " + key;
  }

  invalids.forEach(({ key }, index) => printInvalid(key, index));

  result += " ";

  result += multiple ? "are" : "is";

  result += " invalid!";

  return result;
}
