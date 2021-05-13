import { useContext, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';
import { setupAPIClient } from '../services/api';
import { api } from '../services/apiClient';
import styles from '../styles/Dashboard.module.css';
import { withSSRAuth } from '../utils/withSSRAuth';

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
            E-mail: <span>{user?.email}</span>
          </h2>
          <h2>
            Permissões: <span>{user?.permissions[0]}</span> /{' '}
            <span>{user?.permissions[1]}</span> /{' '}
            <span>{user?.permissions[2]}</span>
          </h2>

          <h2>
            Cargos: <span>{user?.roles}</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  return {
    props: {},
  };
});
