import resetSelectListSetting from "~scripts/setters/resetSelectListSetting";

function max({ card, item, self, older = true }) {
  if (item.value == self.value) return;

  let needsReset = older ? item.value < self.value : item.value > self.value;

  if (!needsReset) return;

  let params = { card, item };

  resetSelectListSetting(params);
}

export default { max };
