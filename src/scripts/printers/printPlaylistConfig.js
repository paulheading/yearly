import getAstroClass from "~scripts/getters/getAstroClass";
import getPlaylistActiveConfig from "~scripts/getters/getPlaylistActiveConfig";
import getStore from "~scripts/getters/getStore";

import exclude from "~scripts/filters/exclude";

export default function () {
  let $box = document.querySelector(".box");

  let astroClass = getAstroClass($box);

  function createConfigTag(title) {
    let $item = document.createElement("div");

    let classList = ["setting", astroClass];

    classList.forEach((className) => $item.classList.add(className));

    $item.innerText = title;

    return $item;
  }

  let { source } = getStore().playlist;

  let title = "Source: " + source.title;

  let $source = createConfigTag(title);

  $box.append($source);

  getPlaylistActiveConfig().forEach(function ({ title, value }) {
    let $item = createConfigTag(title);

    if (exclude.allBooleans(value)) {
      $item.innerText = $item.innerText + ": " + value;
    }

    $box.append($item);
  });
}
