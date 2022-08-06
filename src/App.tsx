import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import WeeklyCards from './pages/WeeklyCards';
import CardPage from './pages/CardPage';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/weekly' element={<WeeklyCards/>}/>
        <Route path='/card/:id' element={<CardPage />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App;
