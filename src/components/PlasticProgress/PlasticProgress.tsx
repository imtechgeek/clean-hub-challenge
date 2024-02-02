import styles from './PlasticProgress.module.css';

interface PlasticProgressProps {
  displayText: string;
  recoveredOrUnassignedPlastic: number;
  totalPlastic: number;
}

export const PlasticProgress = ({
  displayText,
  totalPlastic,
  recoveredOrUnassignedPlastic,
}: PlasticProgressProps) => {
  return (
    <div className={styles.progressContainer}>
      <label className={styles.progressLabel} htmlFor='plastic amount'>
        {displayText}
      </label>

      <progress
        className={styles.progressBar}
        id='plastic amount'
        max={totalPlastic.toString()}
        value={recoveredOrUnassignedPlastic.toString()}
      />
    </div>
  );
};
