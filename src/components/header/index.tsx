import Logo from '../../assets/logo__small.png';
import SearchBar from '../searchbar';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={Logo} alt="" width={44} height={32} />
        <SearchBar placeholder="Nunca deixe de buscar" />
      </div>
    </header>
  );
};

export default Header;
