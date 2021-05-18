import React from 'react';

import styles from '../styles/Dashboard.module.css';

import { setupAPIClient } from '../services/api';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Metrics() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>METRICS</h1>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const { data } = await apiClient.get('/me');

    return {
      props: {},
    };
  },
  {
    permissions: ['metrics.list'],
    roles: ['administrator'],
  }
);
