export default function (array, item) {
  let match = false;

  array.forEach(function (existing) {
    if (existing.track.id == item.track.id) match = true;
  });

  return match ? array : [...array, item];
}
