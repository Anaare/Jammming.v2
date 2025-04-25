import Tracklist from "./Tracklist";

import styles from "./Results.module.css";

const Results = ({ tracks, onAdd }) => {
  return (
    <div>
      <h2 className={styles.heading}>Results</h2>
      <Tracklist tracks={tracks} onAdd={onAdd} />
    </div>
  );
};

export default Results;
