import createBreakpoint from "~scripts/creators/createBreakpoint";
import setHTMLClass from "~scripts/setters/setHTMLClass";

let { widthQuery } = createBreakpoint;

let breakpoints = {
  xs: widthQuery(0, 519),
  sm: widthQuery(520, 767),
  sm_down: widthQuery(0, 767),
  md: widthQuery(768, 1023),
  md_up: widthQuery(768),
  lg: widthQuery(1024, 1199),
  xl: widthQuery(1200),
};

export default function () {
  Object.entries(breakpoints).forEach(function ([key, value]) {
    let { query } = value;

    if (query.matches) setHTMLClass(query.matches, key);

    query.addEventListener("change", function (event) {
      return setHTMLClass(event.matches, key);
    });
  });
}
