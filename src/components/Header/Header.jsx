import './Header.css';

import { LogoutButton } from './LogoutButton/LogoutButton';
import logo from '../../assets/simple notes600x600 claro.png';

const Header = () => {
  return (
    <header className='scale-up-center'>
      
        <img className='logo scale-up-center' src={logo} alt='logo' />
        
        <LogoutButton />
    
    </header>
  );
};

export default Header;
