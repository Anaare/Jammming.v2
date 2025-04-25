import styles from "./Track.module.css";

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const handleClick = () => {
    if (isRemoval) {
      onRemove(track.id);
    } else {
      onAdd(track);
    }
  };

  return (
    <div className={styles.track}>
      <div className={styles.details}>
        <h4>{track.name}</h4>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button className={styles.button} onClick={handleClick}>
        {!isRemoval ? "+" : "-"}
      </button>
    </div>
  );
};

export default Track;
