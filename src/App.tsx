import { Routes, Route } from 'react-router-dom';
import './styles/app.css'
import Home from './pages/Home';
import WeeklyCards from './pages/WeeklyCards';
import CardPage from './pages/CardPage';
import MyAlignment from './pages/CreateAlignment';
import Header from './components/Header';
import { observer } from 'mobx-react-lite';
import UserStore from './store/UserStore';
import AuthPage from './pages/AuthPage';
import CreateAlignment from './pages/CreateAlignment';
import NotFoundPage from './pages/NotFoundPage';
import MyAlignments from './pages/MyAlignments';
import AlignmentPage from './components/AlignmentPage';
import AdminPage from './pages/AdminPage';

const App = observer(() => {
  return (
    <div className='App d-flex flex-column justify-content-center'>
      <Header/>
      {
        UserStore.isAuth ? 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<CreateAlignment/>}/>
          <Route path='/week' element={<WeeklyCards/>}/>
          <Route path='/my/:id' element={<AlignmentPage/>} />
          <Route path='/my' element={<MyAlignments/>}/>
          <Route path='/cards/:id' element={<CardPage/>}/>
          {
            UserStore.user.role === 'admin' &&
            <Route path='/admin' element={<AdminPage />}/> 
          }
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/weekly' element={<WeeklyCards/>}/>
          <Route path='/auth' element={<AuthPage/>}/>
          <Route path='/cards/:id' element={<CardPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      }
    </div>
  )
})

export default App;
