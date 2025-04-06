import { HomeProps } from '../../pages/Home';
import styles from './styles.module.css';

type CountDownProps = {} & HomeProps;

export function CountDown({ state }: CountDownProps) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
