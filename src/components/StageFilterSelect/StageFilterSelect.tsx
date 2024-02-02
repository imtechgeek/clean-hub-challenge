import styles from './StageFilterSelect.module.css';

import { useFilters } from '../FilterProvider';
import { Stage } from '../../utils/types';

export const StageFilterSelect = () => {
  const { filters, setFilters } = useFilters();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.target.value;

    switch (selectValue) {
      case 'Fully onboarded':
        setFilters({ ...filters, stage: Stage.FullyOnboarded });
        break;
      case 'Pilot':
        setFilters({ ...filters, stage: Stage.Pilot });
        break;

      default:
        setFilters({ ...filters, stage: undefined });
    }
  };

  return (
    <div className={styles.container}>
      <select aria-label='Select Stage' onChange={handleSelectChange} className={styles.select}>
        <option>All stages</option>
        <option>Fully onboarded</option>
        <option>Pilot</option>
      </select>
    </div>
  );
};
