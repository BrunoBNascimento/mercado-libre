import { Link } from 'react-router-dom';
import Logo from '../../assets/logo__small.png';
import SearchBar from '../searchbar';
import styles from './styles.module.scss';

type Props = {
  onTypeSearch: Function;
};

const Header = (props: Props) => {
  const { onTypeSearch } = props;

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <img src={Logo} alt="" width={44} height={32} />
        </Link>

        <SearchBar placeholder="Nunca deixe de buscar" onTypeSearch={onTypeSearch} />
      </div>
    </header>
  );
};

export default Header;
