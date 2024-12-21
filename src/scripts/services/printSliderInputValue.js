export default function printSliderInputValue(params) {
  let { $input, $output, $mins } = params;

  if ($input.value != 0) {
    $output.innerText = $input.value;
    $mins.style.removeProperty("display");
  } else {
    $output.innerText = "none";
    $mins.style.display = "none";
  }
}
