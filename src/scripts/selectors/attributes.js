let attributes = {
  button: "button",
  card: ".card-container",
  selectForm: ".select-form",
  data: {},
};

let data = [
  "id",
  "group",
  "card",
  "snake",
  "section",
  "state",
  "print",
  "setting",
  "type",
];

data.forEach((name) => (attributes.data[name] = "data_" + name));

export default attributes;
