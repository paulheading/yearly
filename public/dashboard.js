let $button_custom_playlist = document.querySelector(".custom_playlist");

let $cards = document.querySelectorAll(".card");

let $person_cards = document.querySelectorAll(".card:not(.custom)");

let $custom_card = document.querySelector(".custom.card");

$button_custom_playlist.addEventListener("click", function ({ currentTarget }) {
  if (!currentTarget) return;

  let clicked = currentTarget.getAttribute("clicked");

  let display = "inline-block";

  let clearProps = "all";

  let opacity = 1;

  if (clicked == "true") {
    currentTarget.setAttribute("clicked", "false");
    currentTarget.innerText = "Custom job please";

    let tl = gsap.timeline();

    // prettier-ignore
    tl.to($custom_card, { opacity: 0 })
      .set($custom_card, { display: "none" })
      .set($person_cards, { display })
      .to($person_cards, { opacity })
      .set($cards, { clearProps });
  } else {
    currentTarget.setAttribute("clicked", "true");
    currentTarget.innerText = "Set menu please";

    let tl = gsap.timeline();

    // prettier-ignore
    tl.to($person_cards, { opacity: 0 })
        .set($person_cards, { display: "none" })
        .set($custom_card, { display })
        .to($custom_card, { opacity });
  }
});
