import styles from './styles.module.scss';
import SearchIcon from '../../assets/search.png';

type Props = {
  placeholder: string;
};

const SearchBar = (props: Props) => {
  const { placeholder } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input name="" placeholder={placeholder} />
      </div>
      <button value="" type="button" className={styles.searchButton}>
        <img src={SearchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
