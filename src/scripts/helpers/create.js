import { getDate } from "~scripts/getters";

let { date, time } = getDate();

let name = "Yearly Roundup " + date.short;

let description =
  "Yearly generated playlist. Created at " + time + " on " + date.med;

let playlist = {
  name,
  description,
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  playlist,
  randomNumber,
};
