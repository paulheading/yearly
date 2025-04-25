import $ from "~scripts/selectors";
import attrs from "~scripts/selectors/attrs";
import { gsap } from "gsap";
import cnames from "~scripts/selectors/cnames";

function infoButtonClick(event) {
  let { currentTarget } = event;

  let ease = "linear";

  let duration = 0.3;

  let defaults = { ease, duration };

  let tl = gsap.timeline({ defaults });

  let $card = currentTarget.closest("." + cnames.card.container);

  let cover = $card.querySelector("[" + attrs.data.type + "=cover]");

  let config = $card.querySelector("[" + attrs.data.type + "=config]");

  let coverIsActive = cover.style.display != "none";

  // prettier-ignore
  tl.to($card, { rotateY: 90 })
    .set(cover, { display: coverIsActive ? "none" : "initial" }, "flip")
    .set(config, { display: coverIsActive ? "initial" : "none" }, "flip")
    .to($card, { rotateY: 0 });
}

export default function () {
  $.button.infos.forEach((button) =>
    button.addEventListener("click", infoButtonClick)
  );
}
