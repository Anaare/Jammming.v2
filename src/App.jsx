import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
// import Playlist from "./components/Playlist";
// import Tracklist from "./components/Tracklist";

import "./app.css";

function App() {
  return (
    <div>
      <NavBar />

      <div className="wrapper">
        <div className="container">
          <SearchBar />
          {/* <div className="contentRow">
            <Playlist />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
