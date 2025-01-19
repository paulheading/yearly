import { DateTime } from "luxon";

let { now, TIME_24_WITH_SECONDS, DATETIME_MED_WITH_SECONDS } = DateTime;

let year = now().toFormat("yyyy");

let yearFromString = function (value) {
  if (typeof value != "string") return "";

  return value.slice(0, 4);
};

function seconds() {
  let result = now().toLocaleString(TIME_24_WITH_SECONDS);

  /// create array of hours, numbers, seconds
  result = result.split(":");

  /// reduce array to seconds only
  result = result[2];

  /// isolate the final digit
  result = result.slice(1, 2);

  return result;
}

let timestamp = now().toLocaleString(DATETIME_MED_WITH_SECONDS);

export default function (value) {
  return {
    year,
    yearFromString: yearFromString(value),
    seconds: seconds(),
    timestamp,
  };
}
