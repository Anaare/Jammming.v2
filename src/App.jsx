import { useState, useEffect } from "react";

import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Playlist from "./components/Playlist";

import "./app.css";

const clientId = "4150329a47d1455e95cdff00a1991331";
const redirectUri = "http://localhost:5173"; // Must match your Spotify app Redirect URI
const scopes = ["playlist-modify-public", "playlist-modify-private"]; // whatever you need

const authUrl =
  `https://accounts.spotify.com/authorize?client_id=${clientId}` +
  `&response_type=token` +
  `&redirect_uri=${encodeURIComponent(redirectUri)}` +
  `&scope=${encodeURIComponent(scopes.join(" "))}` +
  `&show_dialog=true`;

function App() {
  const dummyTracks = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      uri: "strrr",
    },
    {
      id: 2,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      uri: "asdad",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const [savedPlaylist, setSavedPlaylist] = useState(null);

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1)); // remove '#'
      const accessToken = params.get("access_token");
      if (accessToken) {
        setToken(accessToken);
        window.history.pushState(null, null, " "); // clean URL
      }
    }
  }, []);

  if (!token) {
    return (
      <button
        className="authButton"
        onClick={() => {
          window.location.href = authUrl; // redirect to authorize
        }}
      >
        Login to Spotify
      </button>
    );
  }

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks(playlistTracks.filter((track) => track.id !== trackId));
  };

  const handleSavePlaylist = () => {
    const uris = playlistTracks.map((track) => track.uri); // map returns an array
    setSavedPlaylist({
      name: playlistName,
      uris: uris,
    });

    // Reset playlist name and tracks after saving
    setPlaylistName("");
    setPlaylistTracks([]);

    console.log("Saved playlist URIs:", uris);
  };

  return (
    <div>
      <NavBar />

      <div className="wrapper">
        <div className="container">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="contentRow">
            <Results
              tracks={dummyTracks}
              onAdd={addTrackToPlaylist}
              onRemove={() => {}}
              isRemoval={false}
            />
            <Playlist
              playlistName={playlistName}
              setPlaylistName={setPlaylistName}
              playlistTracks={playlistTracks}
              setPlaylistTracks={setPlaylistTracks}
              onAdd={() => {}}
              onRemove={removeTrackFromPlaylist}
              isRemoval={true}
              onHandleSave={handleSavePlaylist}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
