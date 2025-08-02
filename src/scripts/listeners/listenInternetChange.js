export default function (callback) {
  if (!callback) return;
  window.addEventListener("offline", () => callback());
  window.addEventListener("online", () => callback());
}
