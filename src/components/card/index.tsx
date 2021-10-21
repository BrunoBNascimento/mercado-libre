import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

const Card = (props: Props) => {
  const { children } = props;

  return <div className={styles.card}>{children}</div>;
};

export default Card;
