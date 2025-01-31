import snakify from "~scripts/helpers/snakify";

export default function (setting) {
  setting.snake = snakify(setting.title);
  return setting;
}
