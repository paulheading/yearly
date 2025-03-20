export default function ($element) {
  let result = "";

  $element.classList.forEach((className) => {
    if (className.includes("astro")) result = className;
  });

  return result;
}
