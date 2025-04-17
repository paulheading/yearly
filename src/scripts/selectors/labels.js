import attr from "~scripts/selectors/attributes";

export default {
  button: (value = "") => attr.button + value,
  card: (value = "") => attr.card + value,
  selectForm: (value = "") => attr.selectForm + value,
  data: {
    section: (value = "") => `[${attr.data.section}=${value}]`,
    setting: (value = "") => `[${attr.data.setting}='true']${value}`,
    snake: (value = "") => `[${attr.data.snake}=${value}]`,
    id: (value = "") => `[${attr.data.id}=${value}]`,
    state: (value = "") => `[${attr.data.state}=${value}]`,
    print: (value = "") => `[${attr.data.print}=${value}]`,
    type: (value = "") => `[${attr.data.type}=${value}]`,
  },
};
