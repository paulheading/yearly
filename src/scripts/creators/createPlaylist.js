import getDate from "#getters/getDate";

let { date, time } = getDate();

let name = "Yearly Roundup " + date.short;

let description =
  "Yearly generated playlist. Created at " + time + " on " + date.med;

export default {
  name,
  description,
};
