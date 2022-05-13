import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IntroPage from './components/Intro/IntroPage';
import MainPage from './components/Main/MainPage';
import NavigationBar from './components/NavigationBar';
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
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
