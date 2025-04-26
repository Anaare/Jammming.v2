import { useState, useEffect } from "react";
import { authUrl, getAccessTokenFromUrl, searchTracks } from "./utils/spotify";

import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Playlist from "./components/Playlist";

import "./app.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [savedPlaylist, setSavedPlaylist] = useState(null);
  const [token, setToken] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const accessToken = getAccessTokenFromUrl();
    if (accessToken) {
      setToken(accessToken);
      window.history.pushState(null, null, " "); // clean URL
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

  const handleSavePlaylist = () => {
    const uris = playlistTracks.map((track) => track.uri);
    setSavedPlaylist({ name: playlistName, uris });
    setPlaylistName("");
    setPlaylistTracks([]);
    console.log("Saved playlist URIs:", uris);
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
