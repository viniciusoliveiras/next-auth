import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className={styles.container}>
        <h1>DASHBOARD</h1>
        <h2>E-mail: {user?.email}</h2>
      </div>
    </>
  );
}
