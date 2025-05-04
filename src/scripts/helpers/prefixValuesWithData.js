export default function (input) {
  let output = {};

  Object.entries(input).forEach(function ([key, value]) {
    output[key] = "data-" + value;
  });

  return output;
}
