import { useEffect } from 'react';

import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import MainPage from './pages/MainPage';
import { initializeAuth } from './redux/actions/loginActions';
import { useAppDispatch } from './hooks';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, []);
  
  return (
    <>
      <Header/>
      <MainPage />
      <Modal/>
    </>
  );
};

export default App;
