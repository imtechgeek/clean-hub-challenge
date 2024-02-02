import { ChangeEvent, useState } from 'react';

import styles from './NameFilterInput.module.css';

import { useFilters } from '../FilterProvider';

export const NameFilterInput = () => {
  const [input, setInput] = useState<string>('');
  const { filters, setFilters } = useFilters();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setInput(inputText);
    const processedInput = inputText.trim().toLowerCase();
    setFilters({ ...filters, name: processedInput });
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type='text'
        value={input}
        onChange={handleChange}
        placeholder='Filter by name'
      />
    </div>
  );
};
