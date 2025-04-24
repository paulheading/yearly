export default function (response) {
  if (response.status == 401) window.location.assign("/");

  return response;
}
