import { DateTime } from "luxon";

let year = () => DateTime.now().toFormat("yyyy");

let yearFromString = (value) => value.slice(0, 4);

function seconds() {
  let result = DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);

  /// create array of hours, numbers, seconds
  result = result.split(":");

  /// reduce array to seconds only
  result = result[2];

  /// isolate the final digit
  result = result.slice(1, 2);

  return result;
}

export default function (value) {
  return {
    year: year(),
    yearFromString: yearFromString(value),
    seconds: seconds(),
  };
}
