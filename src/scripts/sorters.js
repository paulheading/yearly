let byLowestPopularity = (a, b) => a.track.popularity - b.track.popularity;

let byHighestPopularity = (a, b) => b.track.popularity - a.track.popularity;

let byName = function (a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

export { byHighestPopularity, byLowestPopularity, byName };
