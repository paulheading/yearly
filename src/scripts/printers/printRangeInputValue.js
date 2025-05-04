export default function ($input) {
  let $setting = $input.closest(".setting");
  let $output = $setting.querySelector(".output");

  if ($input.value != 0) {
    $input.classList.add("active");

    let multiple = $input.value > 1;

    let innerText = [$input.value];

    innerText.push(multiple ? "mins" : "min");

    $output.innerText = innerText.join(" ");
  } else {
    $input.classList.remove("active");

    $output.innerText = "none";
  }
}
