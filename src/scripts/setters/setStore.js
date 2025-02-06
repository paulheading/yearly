import store from "~data/store";
import settings from "~data/settings";
import getConfigByGroup from "~scripts/getters/getConfigByGroup";
import setAction from "~scripts/setters/setAction";

function cardSetting({ card, setting, value }) {
  store.cards
    .filter(({ id }) => id == card)[0]
    .content.filter(({ type }) => type == "config")[0]
    .settings.filter(({ title }) => title == setting)[0].value = value;
}

function selectList({ card, value, snake }) {
  let setting = settings[snake];

  let params = {
    card,
    setting,
    value,
  };

  cardSetting(params);

  let { self, others } = getConfigByGroup({ card, snake });

  if (self.value) {
    if (self.group.action) {
      others.forEach((item) => {
        let { action } = self.group;

        if (action == "max") {
          let params = { card, item, self };
          setAction.max(params);
        }
      });
    }
  }

  others.forEach(function (item) {
    let { action } = item.group;

    if (action == "max") {
      let params = { card, item, self, older: false };
      setAction.max(params);
    }
  });
}

function rangeInput({ card, value, name }) {
  if (!card) return;

  let setting = settings[name];

  let params = {
    card,
    setting,
    value,
  };

  cardSetting(params);
}

function toggleInput({ card, value, name }) {
  let setting = settings[name];

  let params = {
    card,
    setting,
    value,
  };

  cardSetting(params);
}

export default {
  cardSetting,
  selectList,
  rangeInput,
  toggleInput,
};
