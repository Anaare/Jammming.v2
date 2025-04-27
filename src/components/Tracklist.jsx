import Track from "./Track";

const Tracklist = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </>
  );
};

export default Tracklist;
