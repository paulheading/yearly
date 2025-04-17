import settings from "~data/settings";
import setCardSetting from "~scripts/setters/setCardSetting";
import getConfigByGroup from "~scripts/getters/getConfigByGroup";
import setAction from "~scripts/setters/setAction";
import setStore from "~scripts/setters/setStore";
import data from "~scripts/selectors/data";

function handleGroupActions({ other, action, params }) {
  if (action == "oldest") setAction.oldest({ ...params, other });
  if (action == "newest") setAction.newest({ ...params, other });
}

function handleSetCardSetting(params) {
  let { value } = params;

  let { self, others } = getConfigByGroup(params);

  let { group } = self;

  setCardSetting(params);

  if (!value) return;

  if (!group.action) return;

  others.forEach((other) =>
    handleGroupActions({ other, action: group.action, params })
  );
}

export default function ({ card, value, snake }) {
  let setting = settings[snake];

  let params = {
    setting,
    value,
    snake,
    card,
  };

  if (card) handleSetCardSetting(params);
  else {
    setStore(function (store) {
      if (snake == data.selectForm.choose_source) {
        store.playlist.source.id = value;
        return store;
      }
    });
  }
}
