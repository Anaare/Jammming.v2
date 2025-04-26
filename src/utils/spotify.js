const clientId = "4150329a47d1455e95cdff00a1991331";
const redirectUri = "http://localhost:5173";
const scopes = ["playlist-modify-public", "playlist-modify-private"];

export const authUrl =
  `https://accounts.spotify.com/authorize?client_id=${clientId}` +
  `&response_type=token` +
  `&redirect_uri=${encodeURIComponent(redirectUri)}` +
  `&scope=${encodeURIComponent(scopes.join(" "))}` +
  `&show_dialog=true`;

export function getAccessTokenFromUrl() {
  const hash = window.location.hash;
  if (!hash) return null;

  const params = new URLSearchParams(hash.substring(1));
  return params.get("access_token");
}

export async function searchTracks(searchTerm, token) {
  const endpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    searchTerm
  )}&type=track`;

  const response = await fetch(endpoint, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error("Spotify search failed");
  }

  const data = await response.json();
  return data.tracks.items.map((track) => ({
    id: track.id,
    name: track.name,
    uri: track.uri,
    artist: track.artists[0]?.name || "Unknown Artist",
    album: track.album.name,
  }));
}
