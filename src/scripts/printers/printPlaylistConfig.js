import getClass from "#getters/astro/getClass";
import getPlaylistActiveConfig from "#getters/getPlaylistActiveConfig";
import getStore from "#getters/getStore";
import exclude from "#filters/exclude";
import settings from "#data/settings";

let $box = document.querySelector(".box");

let astroClass = getClass($box);

function createConfigTag(title) {
  let $item = document.createElement("div");

  let classList = ["setting", astroClass];

  classList.forEach((className) => $item.classList.add(className));

  $item.innerText = title;

  $item.setAttribute("data-cy", "setting");

  return $item;
}

export default function () {
  let { sources } = getStore().playlist;

  sources.forEach(function (source) {
    let title = "Source: " + source.title;

    let $source = createConfigTag(title);

    $box.append($source);
  });

  getPlaylistActiveConfig().forEach(function ({ title, value }) {
    if (title == settings.in_recommends) return;

    let $item = createConfigTag(title);

    if (exclude.allBooleans(value)) {
      $item.innerText = $item.innerText + ": " + value;
    }

    $box.append($item);
  });
}
