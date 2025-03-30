import setSearchParams from "~scripts/setters/setSearchParams";

export default function () {
  let urlSearchParams = new URLSearchParams(window.location.search);
  let { size } = urlSearchParams;

  let params = {
    empty: size == 0,
    invalid: [],
    valid: [],
  };

  if (params.empty) return params;

  let entries = Object.fromEntries(urlSearchParams.entries());

  let { valid, invalid } = setSearchParams(entries);

  return { ...params, valid, invalid };
}
