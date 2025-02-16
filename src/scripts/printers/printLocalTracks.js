import $ from "~scripts/selectors";
import { gsap } from "gsap";

export default function (innerText = 200) {
  gsap.to($.print.tracks_added, {
    innerText,
    duration: 2,
    snap: { innerText: 20 },
  });
}
