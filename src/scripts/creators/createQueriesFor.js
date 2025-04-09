export default function (model, name, data) {
  let property = {};

  Object.entries(data).forEach(function ([key, value]) {
    property[key] = model.query[name](value);
    property[key + "s"] = model.query[name + "All"](value);
  });

  model[name] = property;
}
