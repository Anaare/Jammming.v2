import { useState, useEffect } from "react";
import {
  authUrl,
  getAccessTokenFromUrl,
  searchTracks,
  getUsername,
  createPlaylist,
} from "./utils/spotify";

import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Playlist from "./components/Playlist";

import "./app.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [token, setToken] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  useEffect(() => {
    const accessToken = getAccessTokenFromUrl();
    if (accessToken) {
      setToken(accessToken);
      window.history.pushState(null, null, " "); // clean URL

      (async () => {
        try {
          const username = await getUsername(accessToken);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) return;
    try {
      const tracks = await searchTracks(searchTerm, token);
      setSearchResults(tracks);
      setSearchTerm("");
    } catch (error) {
      console.error(error);
    }
  };

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks(playlistTracks.filter((track) => track.id !== trackId));
  };

  const handleSavePlaylist = async () => {
    if (!playlistName) {
      alert("Please, provide a name for your playlist!");
      return;
    }

    if (playlistTracks.length === 0) {
      alert("Please add at least one track to the playlist!");
      return;
    }

    try {
      const createdPlaylist = await createPlaylist(token, playlistName);

      const playlistId = createdPlaylist.id;
      const uris = playlistTracks.map((track) => track.uri);

      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uris }),
      });

      setPlaylistName("");
      setPlaylistTracks([]);

      setShowSuccessOverlay(true);
      setTimeout(() => {
        setShowSuccessOverlay(false);
      }, 3000); // hides after 3 seconds
    } catch (error) {
      console.error(error);
    }
  };

  if (!token) {
    return (
      <button
        className="authButton"
        onClick={() => {
          window.location.href = authUrl;
        }}
      >
        Login to Spotify
      </button>
    );
  }

  return (
    <div>
      <NavBar />
      {showSuccessOverlay && (
        <div className="success-overlay">
          <p>Playlist saved successfully! 🎉</p>
        </div>
      )}

      <div className="wrapper">
        <div className="container">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
          <div className="contentRow">
            <Results
              onAdd={addTrackToPlaylist}
              onRemove={() => {}}
              isRemoval={false}
              tracks={searchResults}
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
