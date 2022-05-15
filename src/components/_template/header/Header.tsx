import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.title}>
        <h1>Movie App</h1>
      </div>
    </header>
  );
};

export default Header;
