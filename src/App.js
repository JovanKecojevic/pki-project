import './App.scss';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import {useEffect} from "react";

function App() {
  const userLoggedIn = useSelector(state => state);

  useEffect(()=> {
      console.log(userLoggedIn);
  }, [userLoggedIn]);

  return (
    <div className="App">
      <Header />
      <LoginPage />
    </div>
  );
}

export default App;
