import { DateTime } from "luxon";

let getYear = () => DateTime.now().toFormat("yyyy");

let getYearFromString = (value) => value.slice(0, 4);

function getSeconds() {
  let result = DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);

  /// create array of hours, numbers, seconds
  result = result.split(":");

  /// reduce array to seconds only
  result = result[2];

  /// isolate the final digit
  result = result.slice(1, 2);

  return result;
}

export { getYear, getYearFromString, getSeconds };
