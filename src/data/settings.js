export let discovered_this_year = "Discovered this year";

export let least_popular = "Least popular music";
export let most_popular = "Most popular music";

export let released_this_year = "Released this year";

export let include_recommends = "Include recommends";
export let exclude_recommends = "Exclude recommends";

export let include_explicit = "Explicit music only";
export let exclude_explicit = "No explicit music";

export let max_length = "Max length";
export let min_length = "Min length";

export let groups = {
  popularity: {
    name: "popularity",
    action: "cancel",
  },
  explicit: {
    name: "explicit",
    action: "cancel",
  },
  duration: {
    name: "duration",
    action: "ceiling",
  },
};
