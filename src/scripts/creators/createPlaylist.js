import { getDate } from "~scripts/getters";

let { date, time } = getDate();

let name = "Yearly Roundup " + date.short;

let description =
  "Yearly generated playlist. Created at " + time + " on " + date.med;

export default {
  name,
  description,
};
