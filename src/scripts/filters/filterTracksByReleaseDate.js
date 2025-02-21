export default function ({ items, value }) {
  return items.filter(function ({ track }) {
    let { album } = track;
    let release_year = album.release_date.slice(0, 4);

    return release_year == value;
  });
}
