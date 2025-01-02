let keyPress = {};

keyPress.isMatch = (key, array) => array.includes(key);

keyPress.isOpen = (key) => keyPress.isMatch(key, ["Enter", " "]);

keyPress.isClose = (key) => keyPress.isMatch(key, ["Escape"]);

keyPress.isDown = (key) => keyPress.isMatch(key, ["ArrowDown"]);

keyPress.isUp = (key) => keyPress.isMatch(key, ["ArrowUp"]);

keyPress.isTab = (key) => keyPress.isMatch(key, ["Tab"]);

keyPress.isOpenGroup = function (key) {
  return keyPress.isOpen(key) || keyPress.isUp(key) || keyPress.isDown(key);
};

export default keyPress;
