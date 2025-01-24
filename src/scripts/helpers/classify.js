export default function (value) {
  let className = value.toLowerCase();
  return className.split(" ").join("_");
}
