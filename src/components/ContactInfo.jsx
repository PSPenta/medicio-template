import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faFacebook, faGooglePlus, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './ContactInfo.css';

function ContactInfo() {
  return (
    <section id={'contact-info'}>
      <div className={'container'}>
        <div className={'contact-column'}>
          <div className={'contact-row'}>
            <h3>About Medicio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className={'contact-row'}>
            <h3>Information</h3>
            <ul>
              <li><a href={'#Home'}>Home</a></li>
              <li><a href={'#Laboratory'}>Laboratory</a></li>
              <li><a href={'#Medical_treatment'}>Medical treatment</a></li>
              <li><a href={'#tc'}>Terms & conditions</a></li>
            </ul>
          </div>
        </div>
        <div className={'contact-column'}>
          <div className={'contact-row'}>
            <h3>Medicio center</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p>
          </div>
          <div className={'contact-row'}>
            <p className={'contact-us'}><span className={'contact-icons'}><FontAwesomeIcon icon={faCalendar} /></span>Monday - Saturday, 8am to 10pm</p>
            <p className={'contact-us'}><span className={'contact-icons'}><FontAwesomeIcon icon={faPhone} /></span><a href={'tel:+620888904711'}>+62 0888 904 711</a></p>
            <p className={'contact-us'}><span className={'contact-icons'}><FontAwesomeIcon icon={faEnvelope} /></span><a href={'mailto:hello@medicio.com'}>hello@medicio.com</a></p>
          </div>
        </div>
        <div className={'contact-column'}>
          <div className={'contact-row'}>
            <h3>Our location</h3>
            <p>The Suithouse V303, Kuningan City, Jakarta, Indonesia 12940</p>
          </div>
          <div className={'contact-row'}>
            <h3>Follow us</h3>
            <span className={'media-icons'} id={'fb-icon'}><FontAwesomeIcon icon={faFacebook} /></span>
            <span className={'media-icons'} id={'twitter-icon'}><FontAwesomeIcon icon={faTwitter} /></span>
            <span className={'media-icons'} id={'google-icon'}><FontAwesomeIcon icon={faGooglePlus} /></span>
            <span className={'media-icons'} id={'vimeo-icon'}><FontAwesomeIcon icon={faVimeo} /></span>
            <span className={'media-icons'} id={'dribble-icon'}><FontAwesomeIcon icon={faDribbble} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
