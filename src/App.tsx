import { Routes, Route } from 'react-router-dom';
import './styles/app.css'
import Home from './pages/Home';
import WeeklyCards from './pages/WeeklyCards';
import CardPage from './pages/CardPage';
import MyAlignment from './pages/MyAlignment';
import Header from './components/Header';

function App() {
  return (
    <div className='App d-flex flex-column justify-content-center'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weekly' element={<WeeklyCards/>}/>
        <Route path='/my' element={<MyAlignment/>}/>
        <Route path='/card/:id' element={<CardPage />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App;
