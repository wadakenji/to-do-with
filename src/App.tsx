import './App.css';
import Layout from './components/Layout';
import Login from './components/Login';
import { useAuth } from './lib/hooks/auth/useAuth';
import { Todo } from './components/Todo';

const App = () => {
  const { session, isLoading, refreshSession } = useAuth();

  return (
    <Layout>
      {!isLoading &&
        (session ? (
          <Todo />
        ) : (
          <Login onSingInSuccess={refreshSession} />
        ))}
    </Layout>
  );
};

export default App;
