import styles from './styles.module.scss';

type Props = {
  items: string[];
};

const Breadcrumbs = (props: Props) => {
  const { items } = props;

  return (
    <div className={styles.breadcrumbs}>
      {items && items.map((item) => <span key={item}>{`${item} > `}</span>)}
    </div>
  );
};

export default Breadcrumbs;
