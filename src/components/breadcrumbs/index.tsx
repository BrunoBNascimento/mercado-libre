import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
  items: string[];
};

const Breadcrumbs = (props: Props) => {
  const { items } = props;

  return (
    <div className={styles.breadcrumbs}>
      {items &&
        items.map((item, idx) => (
          <>
            <span
              key={item}
              className={classNames({
                [styles.breadcrumbsLastItem]: idx === items.length - 1,
              })}
            >
              {item}
            </span>
            {!(idx === items.length - 1) && (
              <span className={styles.breadcrumbsSeparator}>{' > '}</span>
            )}
          </>
        ))}
    </div>
  );
};

export default Breadcrumbs;
