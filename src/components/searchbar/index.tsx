import debounce from 'lodash.debounce';
import styles from './styles.module.scss';
import SearchIcon from '../../assets/search.png';

type Props = {
  placeholder: string;
  onTypeSearch: Function;
};

const SearchBar = (props: Props) => {
  const { placeholder, onTypeSearch } = props;
  const handleChange = debounce((e) => onTypeSearch(e.target.value), 500);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input name="" placeholder={placeholder} onChange={handleChange} />
      </div>
      <button value="" type="button" className={styles.searchButton}>
        <img src={SearchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
