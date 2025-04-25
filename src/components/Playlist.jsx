import Track from "./Track";

import styles from "./Playlist.module.css";

const Playlist = ({
  playlistName,
  setPlaylistName,
  playlistTracks,
  onAdd,
  onRemove,
  isRemoval,
}) => {
  return (
    <div className={styles.playlist}>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => {
          setPlaylistName(e.target.value);
          console.log(playlistName);
        }}
      />
      <div className={styles.tracksWrapper}>
        {playlistTracks.map((track) => (
          <div key={track.id}>
            <Track
              track={track}
              onAdd={onAdd}
              onRemove={onRemove}
              isRemoval={isRemoval}
            />
          </div>
        ))}
      </div>

      <button className={styles.saveButton}>save to spotify</button>
    </div>
  );
};

export default Playlist;
