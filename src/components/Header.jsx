import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.png';
import './Header.css';

function Header() {
  return (
    <header>
      <div className={'container'}>
        <div className={'logo'}>
          <a href={'#Home'}><img className={'logo-img'} src={logo} alt={'Medico'} /></a>
        </div>
        <nav>
          <ul>
            <li><a href={'#Home'} className={'active'}>Home</a></li>
            <li><a href={'#Service'}>Service</a></li>
            <li><a href={'#Doctors'}>Doctors</a></li>
            <li><a href={'#Facilities'}>Facilities</a></li>
            <li><a href={'#Pricing'}>Pricing</a></li>
            <li><a href={'#More'}>More<span><FontAwesomeIcon icon={faCaretDown} /></span><sup>Extra</sup></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
