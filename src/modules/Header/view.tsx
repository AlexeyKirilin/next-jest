import React, { useState } from 'react';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const [value, setValue] = useState('');

  const onChangeInput = event => {
    setValue(event.target.value);
  };
  return (
    <header className={styles.header}>
      <h2 className={styles.headerTitle}>bakery</h2>
      <input
        value={value}
        onChange={onChangeInput}
        placeholder="search..."
        className={styles.headerInput}
        type="text"
      />
    </header>
  );
};

export default Header;
