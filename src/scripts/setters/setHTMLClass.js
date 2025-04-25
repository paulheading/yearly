export default function (matches, className) {
  let $html = document.documentElement.classList;
  matches ? $html.add(className) : $html.remove(className);
}
