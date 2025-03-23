import { DateTime } from "luxon";

let { now, DATE_SHORT, DATE_MED, TIME_SIMPLE } = DateTime;

let year = now().toFormat("yyyy");

let yearFromString = function (value) {
  if (typeof value != "string") return "";
  return value.slice(0, 4);
};

let date = {
  short: now().toLocaleString(DATE_SHORT),
  med: now().toLocaleString(DATE_MED),
};

let time = now().setLocale("en-US").toLocaleString(TIME_SIMPLE);

let iso = {
  now: now().toISO(),
  expiry: now().plus({ hours: 1 }).toISO(),
};

export default function (value) {
  return {
    year,
    yearFromString: yearFromString(value),
    date,
    time,
    iso,
  };
}
