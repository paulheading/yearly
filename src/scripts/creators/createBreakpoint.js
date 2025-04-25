function queryString({ axis, min, max }) {
  let query = [];

  if (min) query.push("(min-" + axis + ": " + min + "px)");
  if (min && max) query.push("and");
  if (max) query.push("(max-" + axis + ": " + max + "px)");

  return query.join(" ");
}

function widthQuery(min, max) {
  let query = window.matchMedia(queryString({ axis: "width", min, max }));
  return { min, max, query };
}

function heightQuery(min, max) {
  let query = window.matchMedia(queryString({ axis: "height", min, max }));
  return { min, max, query };
}

export default {
  queryString,
  widthQuery,
  heightQuery,
};
