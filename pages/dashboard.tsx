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
        <h1>DASHBOARD</h1>
        <h2>E-mail: {user?.email}</h2>
      </div>
    </>
  );
}
