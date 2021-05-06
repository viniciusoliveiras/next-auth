import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      email,
      password,
    };

    await signIn(data);

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='E-mail'
      />

      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Senha'
      />

      <button type='submit'> {isLoading ? 'Entrando' : 'Entrar'} </button>
    </form>
  );
}
