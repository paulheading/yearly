export default async function (artist) {
  let method = "get";

  let entity = "artist";

  let query = "query=artist:" + artist;

  let format = "fmt=json";

  let endpoint = `${entity}?${query}&${format}`;

  let url = "https://musicbrainz.org/ws/2/" + endpoint;

  let agent = {
    key: "User-Agent",
    value: "Yearly/0.0.1 (hello@paul.ly)",
  };

  let options = {
    [agent.key]: agent.value,
    method,
  };

  let response = await fetch(url, options);

  let data = await response.json();

  let { artists } = data;

  return artists[0];
}
