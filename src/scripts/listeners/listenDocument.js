export default function (callback) {
  document.addEventListener("click", function (event) {
    let { target } = event;
    if (callback) callback(target);
  });
}
