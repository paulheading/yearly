export default function (input) {
  let output = {};

  Object.entries(input).forEach(function ([key, value]) {
    output["data-" + key] = value;
  });

  return output;
}
