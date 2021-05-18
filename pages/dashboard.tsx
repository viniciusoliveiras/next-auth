import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';
import { setupAPIClient } from '../services/api';
import { api } from '../services/apiClient';
import { withSSRAuth } from '../utils/withSSRAuth';
import { Can } from '../components/Can';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get('/me')
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>DASHBOARD</h1>

          <h2>
            Usuário: <span>{user?.email}</span> | <span>{user?.roles}</span>
          </h2>

          <Can permissions={['metrics.list']}>
            <h2>Métricas</h2>
          </Can>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const { data } = await apiClient.get('/me');

  console.log(data);

  return {
    props: {},
  };
});
