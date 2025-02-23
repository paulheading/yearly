import settings from "~data/settings";
import setCardSetting from "~scripts/setters/setCardSetting";
import getConfigByGroup from "~scripts/getters/getConfigByGroup";
import setAction from "~scripts/setters/setAction";
import { $cy } from "~scripts/selectors";
import setStore from "~scripts/store/setStore";

function handleSetCardSetting(params) {
  setCardSetting(params);

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

export default function ({ card, value, snake }) {
  let setting = settings[snake];

  let params = {
    card,
    setting,
    value,
  };

  if (card) handleSetCardSetting(params);
  else {
    let { choose_source } = $cy.selectForm;

    setStore(function (store) {
      if (snake == choose_source) store.playlist.source = value;
      return store;
    });
  }
}
