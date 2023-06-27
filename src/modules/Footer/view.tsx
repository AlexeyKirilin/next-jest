import React from 'react';

import styles from './styles.module.scss';

const Footer = ({ data }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerText}>total :</div>
        <div className={styles.footerItems}>
          <div className={styles.footerItemsWrapper}>
            <div className={styles.footerItem}>
              <p className={styles.footerName}>name №1</p>
              <p className={styles.footerPrice}>555 P</p>
            </div>
            <div className={styles.footerItem}>
              <p className={styles.footerName}>name №2</p>
              <p className={styles.footerPrice}>777 P</p>
            </div>
          </div>

          <button className={styles.footerButtonSend}>Pay order</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
