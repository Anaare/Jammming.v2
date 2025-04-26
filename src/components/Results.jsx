import Tracklist from "./Tracklist";
import styles from "./Results.module.css";

const Results = ({ tracks, onAdd }) => {
  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.heading}>Results</h2>
      <div className={styles.tracksWrapper}>
        <Tracklist tracks={tracks} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Results;
