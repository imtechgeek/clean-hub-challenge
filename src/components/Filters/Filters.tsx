import styles from './Filters.module.css';

import { ActiveFilterSwitch } from '../ActiveFilterSwitch/ActiveFilterSwitch';

import { NameFilterInput } from '../NameFilterInput/NameFilterInput';

import { StageFilterSelect } from '../StageFilterSelect/StageFilterSelect';
export const Filters = () => {
  return (
    <div data-testid='filters' className={styles.container}>
      <NameFilterInput />
      <div className={styles.filters}>
        <ActiveFilterSwitch />
        <StageFilterSelect />
      </div>
    </div>
  );
};
