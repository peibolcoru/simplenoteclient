//Componentes principales
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingUserPage from './pages/LandingPage/LandingPage/LandingUserPage';
import LoginPage from './pages/LandingPage/LoginPage/LoginPage';
import { Walls } from './components/Walls/Walls';
import { SelectedWallPage } from './pages/SelectedWallPage/SelectedWallPage';
//
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NofFoundPage/NotFoundPage';

//Contexto de usuario
import { useAuth } from './Hooks/useAuth';

function App() {

  const { isAuthenticated } = useAuth();

  return (
    <div className='app'>
      {isAuthenticated && <Header />}
      {isAuthenticated && <hr></hr>}
      <main>
        {isAuthenticated && <Walls/>}
          <div className='notes-container'>
            <Routes>
              <Route
                path='/'
                element={isAuthenticated ?  <LandingUserPage />  : <LoginPage />}
              />
              {<Route path='/wall/:id' element={isAuthenticated  ? <SelectedWallPage /> : <NotFoundPage />}/>}
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>       
      </main>
      {isAuthenticated && <hr></hr>}
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
