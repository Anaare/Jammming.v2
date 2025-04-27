import styles from "./SearchBar.module.css";
const SearchBar = ({ searchTerm, setSearchTerm, onSearch, isLoading }) => {
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
      <button onClick={onSearch} disabled={isLoading}>
        {isLoading ? "Loading..." : "search"}
      </button>
    </div>
  );
};

export default SearchBar;
