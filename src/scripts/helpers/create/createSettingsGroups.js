export default function (settings) {
  let groups = [];
  let group = 0;
  let current = 0;
  let max = 2;

  settings.forEach(function (setting) {
    let first = current == 0;
    let last = current + 1 == max;

    if (first) groups.push([]);

    groups[group].push(setting);

    current++;

    if (last) {
      current = 0;
      group++;
    }
  });

  return groups;
}
