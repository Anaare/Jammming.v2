import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.header}>
        Ja<span className={styles.middle}>mmm</span>ing
      </h1>
    </nav>
  );
};

export default NavBar;
