import styles from './Main.module.css';

import { Filters } from '../../components/Filters/Filters';
import { FilterProvider } from '../../components/FilterProvider';
import { HubList } from '../../components/Hublist/HubList';

export const Main = () => {
  return (
    <FilterProvider>
      <main className={styles.container}>
        <h2>Collection Hubs</h2>
        <Filters />
        <HubList />
      </main>
    </FilterProvider>
  );
};
