import classify from "~scripts/helpers/classify";

export default function (setting) {
  setting.data = classify(setting.title);
  return setting;
}
