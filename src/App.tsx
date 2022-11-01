import './App.css';
import Layout from './components/Layout';
import Login from './components/Login';
import { useAuth } from './lib/hooks/useAuth';

const App = () => {
  const { session, isLoading, refreshSession } = useAuth();

  return (
    <Layout>
      {!isLoading &&
        (session ? (
          'かみんぐすーん…'
        ) : (
          <Login onSingInSuccess={refreshSession} />
        ))}
    </Layout>
  );
};

export default App;
