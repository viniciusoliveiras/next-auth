import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/api';
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
