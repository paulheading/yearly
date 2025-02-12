import settings from "~data/settings";
import setCardSetting from "~scripts/setters/setCardSetting";
import getConfigByGroup from "~scripts/getters/getConfigByGroup";
import setAction from "~scripts/setters/setAction";

export default function ({ card, value, snake }) {
  let setting = settings[snake];

  let params = {
    card,
    setting,
    value,
  };

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
