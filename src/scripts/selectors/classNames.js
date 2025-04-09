let classNames = { button: {} };

let buttons = [
  "back",
  "build",
  "login",
  "select",
  "dot",
  "custom",
  "info",
  "save",
  "source",
  "refresh",
];

buttons.forEach((name) => (classNames.button[name] = "." + name + "_button"));

export default classNames;
