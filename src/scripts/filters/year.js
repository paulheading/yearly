import getDate from "~scripts/getters/getDate";

let errorCustomYear = "custom year not set";

function processYearValue(value, custom_year) {
  let string = getDate(value).yearFromString;
  let target = custom_year;

  return { string, target };
}

function noOlderThan(value, custom_year) {
  if (!custom_year) return console.log(errorCustomYear);

  let { string, target } = processYearValue(value, custom_year);

  return string >= target;
}

function noNewerThan(value, custom_year) {
  if (!custom_year) return console.log(errorCustomYear);

  let { string, target } = processYearValue(value, custom_year);

  return string <= target;
}

function match(value, custom_year) {
  if (!custom_year) return console.log(errorCustomYear);

  let { string, target } = processYearValue(value, custom_year);

  return string == target;
}

export default { noOlderThan, noNewerThan, match };
