import $ from "~scripts/selectors";
import { gsap } from "gsap";

function infoButtonClick(event) {
  let { currentTarget } = event;

  let ease = "linear";

  let duration = 0.3;

  let defaults = { ease, duration };

  let tl = gsap.timeline({ defaults });

  let $card = currentTarget.closest(".card-container");

  let cover = $card.querySelector("[data-type=cover]");

  let config = $card.querySelector("[data-type=config]");

  let coverIsActive = cover.style.display != "none";

  // prettier-ignore
  tl.to($card, { rotateY: 90 })
    .set(cover, { display: coverIsActive ? "none" : "initial" }, "flip")
    .set(config, { display: coverIsActive ? "initial" : "none" }, "flip")
    .to($card, { rotateY: 0 });
}

export default function () {
  $.buttons.info.forEach((button) =>
    button.addEventListener("click", infoButtonClick)
  );
}
