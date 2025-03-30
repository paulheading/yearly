import $ from "~scripts/selectors";
import displaySection from "~scripts/display/displaySection";

let element = $.print.banner;

function amendHeader() {
  let $header = document.querySelector("header");
  $header.style.height = "3.75rem";
}

function display() {
  this.amendHeader();
  displaySection("banner", "block");
}

function append(content) {
  this.display();
  this.innerHTML("");
  this.element.append(content);
}

function innerHTML(content) {
  this.display();
  this.element.innerHTML = content;
}

export default {
  element,
  amendHeader,
  display,
  append,
  innerHTML,
};
