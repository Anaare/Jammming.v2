import styles from "./Searchbar.module.css";
const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <button onClick={onSearch}>search</button>
    </div>
  );
};

export default SearchBar;
