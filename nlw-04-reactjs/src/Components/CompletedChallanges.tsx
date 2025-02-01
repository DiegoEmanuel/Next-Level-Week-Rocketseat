import { useContext } from 'react';
import { ChallangesContext } from '../context/ChallangesContext';
import styles from '../styles/components/CompletedChallanges.module.css';

export function CompletedChallanges() {
  const { challangesCompleted } = useContext(ChallangesContext);

  return (
    <div className={styles.complettedChallangesContainer}>
      <span>Desafios completos</span>
      <span>{challangesCompleted}</span>
    </div>
  );
}