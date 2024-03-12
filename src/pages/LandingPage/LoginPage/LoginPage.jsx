//CSS

import '../../../pages/LandingPage/LoginPage/LoginPage.css';



import { LoginForm } from '../../../forms/LoginForm/LoginForm';
import { Pagetitle } from '../../../components/PageTitle/Pagetitle';

const Login = () => {
  return (
    
      <div className='index-container scale-up-center'>
        <Pagetitle />
        <LoginForm />
      </div>
    
  );
};

export default Login;
 