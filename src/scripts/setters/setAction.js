import resetSelectFormSetting from "~scripts/setters/resetSelectFormSetting";

function oldest(params) {
  let { value, other, card } = params;

  if (other.value == value) return;

  let needsReset = value > other.value;

  if (!needsReset) return;

  resetSelectFormSetting({ card, form: other });
}

function newest(params) {
  let { value, other, card } = params;

  if (other.value == value) return;

  let needsReset = value < other.value;

  if (!needsReset) return;

  resetSelectFormSetting({ card, form: other });
}

export default { oldest, newest };
