export default function () {
  let client_id = import.meta.env.PUBLIC_CLIENT_ID;
  let redirect_uri = import.meta.env.PUBLIC_REDIRECT_URI;
  let response_type = "code";
  let scope =
    "user-library-read, playlist-modify-public, playlist-modify-private, playlist-read-private, playlist-read-collaborative";

  let params = {
    response_type,
    client_id,
    scope,
    redirect_uri,
  };

  let auth_query_parameters = new URLSearchParams({ ...params });

  window.location.replace(
    "https://accounts.spotify.com/authorize?" + auth_query_parameters.toString()
  );
}
