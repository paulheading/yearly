import createLogin from "#creators/createLogin";

export default function () {
  let div = document.createElement("div");

  let button = document.createElement("button");

  button.innerText = "Log in";

  button.addEventListener("click", createLogin);

  div.innerHTML += "Options saved! You need to ";

  div.append(button);

  return div;
}
