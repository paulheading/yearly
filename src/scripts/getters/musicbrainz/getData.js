export default async function getData(query) {
  let url = "https://musicbrainz.org/ws/2/artist/" + query + "&fmt=json";

  let agent = {
    key: "User-Agent",
    value: "Yearly/0.0.1 (hello@paul.ly)",
  };

  let options = {
    [agent.key]: agent.value,
    method: "get",
  };

  let response = await fetch(url, options);

  let data = await response.json();

  return data;
}
