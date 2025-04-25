import { useState } from "react";

import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Playlist from "./components/Playlist";

import "./app.css";

function App() {
  const dummyTracks = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
    },
    {
      id: 2,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks(playlistTracks.filter((track) => track.id !== trackId));
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
