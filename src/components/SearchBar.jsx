import styles from "./Searchbar.module.css";
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>search</button>
    </div>
  );
};

export default SearchBar;
