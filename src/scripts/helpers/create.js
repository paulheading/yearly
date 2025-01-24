import { getDate } from "~scripts/getters";

let playlistName = () => `Yearly Roundup [${getDate().timestamp}]`;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  playlistName,
  randomNumber,
};
