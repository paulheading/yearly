export default function ($input) {
  let $setting = $input.closest(".setting");
  let $output = $setting.querySelector(".output");
  let $mins = $setting.querySelector(".mins");

  if ($input.value != 0) {
    $output.innerText = $input.value;
    $mins.style.removeProperty("display");
  } else {
    $output.innerText = "none";
    $mins.style.display = "none";
  }
}
