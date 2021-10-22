import { Fragment } from 'react';
import classNames from 'classnames';
import isEmpty from 'lodash.isempty';
import styles from './styles.module.scss';

type Props = {
  items: string[];
};

const Breadcrumbs = (props: Props) => {
  const { items } = props;

  return (
    <div className={styles.breadcrumbs}>
      {!isEmpty(items) &&
        items.map((item, idx) => (
          <Fragment key={item}>
            <span
              className={classNames({
                [styles.breadcrumbsLastItem]: idx === items.length - 1,
              })}
            >
              {item}
            </span>
            {!(idx === items.length - 1) && (
              <span className={styles.breadcrumbsSeparator}>{' > '}</span>
            )}
          </Fragment>
        ))}
    </div>
  );
};

export default Breadcrumbs;
