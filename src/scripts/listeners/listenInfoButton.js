import $ from "~scripts/selectors";
import attr from "~scripts/selectors/attributes";
import { gsap } from "gsap";

function infoButtonClick(event) {
  let { currentTarget } = event;

  let ease = "linear";

  let duration = 0.3;

  let defaults = { ease, duration };

  let tl = gsap.timeline({ defaults });

  let $card = currentTarget.closest(attr.card);

  let cover = $card.querySelector("[" + attr.data.type + "=cover]");

  let config = $card.querySelector("[" + attr.data.type + "=config]");

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
