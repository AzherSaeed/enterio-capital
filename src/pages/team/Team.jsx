import React from 'react';
import { logo } from 'assets';
import styles from './Team.module.css';

function Team() {
  return (
    <div>
      <h1>Team</h1>
      <div className={styles.TestDiv}>Test Div</div>
      <img src={logo} alt="" />
    </div>
  );
}

export default Team;
