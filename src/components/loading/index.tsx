import styles from './styles.module.scss';
import loading from '../../assets/loading.gif';

export default function Loading() {
  return (
    <div className={styles.wrapper} data-testid="loading">
      <img src={loading} alt="Imagem carregando..." />
    </div>
  );
}
