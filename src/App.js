import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import IntroPage from './components/Intro/IntroPage';
import MainPage from './components/Main/MainPage';
import LoginPage from './components/Login/LoginPage';
import JoinPage from './components/Join/JoinPage';
import ResultPage from './components/Result/ResultPage';
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
          <Route exact path='/join' element={<JoinPage/>} />
          <Route exact path='/result' element={<ResultPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
