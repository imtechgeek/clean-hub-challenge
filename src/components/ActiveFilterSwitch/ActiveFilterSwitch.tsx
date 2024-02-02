import { useState } from 'react';

import styles from './ActiveFilterSwitch.module.css';

import { useFilters } from '../FilterProvider';

export const ActiveFilterSwitch = () => {
  const [toggle, setToggle] = useState(false);
  const { filters, setFilters } = useFilters();

  const toggleActiveFilter = () => {
    setFilters({ ...filters, active: !toggle });
    setToggle(!toggle);
  };

  return (
    <button className={toggle ? styles.buttonGreen : styles.button} onClick={toggleActiveFilter}>
      Active
    </button>
  );
};
