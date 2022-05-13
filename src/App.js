import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import IntroPage from './components/Intro/IntroPage';
import MainPage from './components/Main/MainPage';
import LoginPage from './components/Login/LoginPage';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route exact path='/' element={<IntroPage/>} />
          <Route exact path='/main' element={<MainPage/>} />
          <Route exact path='/login' element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
