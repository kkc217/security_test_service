import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
// import logo from './logo.svg';
// import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route exact path='/' element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
