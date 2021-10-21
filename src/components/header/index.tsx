import Logo from '../../assets/logo__small.png';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={Logo} alt="" />
        <input placeholder="Nunca dejes de buscar" />
      </div>
    </header>
  );
};

export default Header;
