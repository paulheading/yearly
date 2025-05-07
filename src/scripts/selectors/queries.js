import $ from "paully/selectors";
import cnames from "~scripts/selectors/cnames";
import attrs from "~scripts/selectors/attrs";

let dataQuery = (name, value) => `[${attrs.data[name]}=${value}]`;

let query = {};

query.card = function (value = "") {
  return $.query.selector("." + cnames.card.container + value);
};

query.cardAll = function (value = "") {
  return $.query.selectorAll("." + cnames.card.container + value);
};

query.cardId = function (value = "") {
  return query.card(dataQuery("id", value));
};

query.state = function (value = "") {
  return $.query.selector(dataQuery("state", value));
};

query.print = function (value = "") {
  return $.query.selector(dataQuery("print", value));
};

query.section = function (value = "") {
  return $.query.selector(dataQuery("section", value));
};

query.sectionAll = function (value = "") {
  return $.query.selectorAll(dataQuery("section", value));
};

query.selectFormSnake = function (value = "") {
  return $.query.selectForm(dataQuery("snake", value));
};

query.selectFormSnakeAll = function (value = "") {
  return $.query.selectFormAll(dataQuery("snake", value));
};

query.settingAll = function (value = "") {
  return $.query.selectorAll(`[${attrs.data.setting}=true]${value}`);
};

query.settingType = function (value = "") {
  return query.settingAll(dataQuery("type", value));
};

export default query;
