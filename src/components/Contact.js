import React from "react";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.boxes}>
        <div data-color="primary" className={styles.box}>
          This is first box
        </div>
        <div className={styles.box}>This is second box</div>
        <div className={styles.box}>This is third box</div>
        <div data-color="primary" className={styles.box}>
          This is fourth box
        </div>
      </div>
    </div>
  );
};

export default Contact;
