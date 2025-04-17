import attrs from "~scripts/selectors/attrs";
import cnames from "~scripts/selectors/cnames";
import classify from "~scripts/helpers/classify";

let createQuery = (name, value = "") => `[${attrs.data[name]}=${value}]`;

export default {
  button: (value = "") => attrs.button + value,
  card: (value = "") => classify(cnames.card.container) + value,
  selectForm: (value = "") => classify(cnames.selectForm.form) + value,
  data: {
    section: (value) => createQuery("section", value),
    setting: (value = "") => `[${attrs.data.setting}='true']${value}`,
    snake: (value) => createQuery("snake", value),
    id: (value) => createQuery("id", value),
    state: (value) => createQuery("state", value),
    print: (value) => createQuery("print", value),
    type: (value) => createQuery("type", value),
  },
};
