import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCircleH,
  faFlask,
  faHospital,
  faRectangleList,
  faSquarePlus,
  faStethoscope,
  faUserDoctor,
  faWheelchair 
} from '@fortawesome/free-solid-svg-icons';

import MainService from './MainService';
import ServiceStep from './ServiceStep';
import serviceImg from './service.jpg';
import './Services.css';

function Services() {
  let bookAppointment = () => {
    return;
  };

  return (
    <section id={'services'}>
      <div className={'container'}>
        <div className={'service-procedure'}>
          <ServiceStep icon={<FontAwesomeIcon icon={faCheck} />} heading={'Make an appointment'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
          <ServiceStep icon={<FontAwesomeIcon icon={faRectangleList} />} heading={'Choose your package'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
          <ServiceStep icon={<FontAwesomeIcon icon={faUserDoctor} />} heading={'Help by specialist'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
          <ServiceStep icon={<FontAwesomeIcon icon={faHospital} />} heading={'Get diagnostic report'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
        </div>
        <div className={'emergency'}>
          <div className={'emergency-text'}>
            <h1>In an emergency? Need help now?</h1>
            <p>Vivamus accumsan nulla ipsum. Maecenas eget pharetra orci, nec bibendum ligula.</p>
          </div>
          <button className={'btn'} onClick={bookAppointment}>Book an appointment</button>
        </div>
        <div className={'main-services'}>
          <img src={serviceImg} alt={'Our Services'} />
          <div className={'service-list'}>
            <MainService icon={<FontAwesomeIcon icon={faStethoscope} />} heading={'Medical checkup'} description={'Nulla non augue suscipit mauris finibus posuere quis sit amet justo.'} />
            <MainService icon={<FontAwesomeIcon icon={faCircleH} />} heading={'Gyn Care'} description={'Nulla non augue suscipit mauris finibus posuere quis sit amet justo.'} />
            <MainService icon={<FontAwesomeIcon icon={faWheelchair} />} heading={'Nursing services'} description={'Nulla non augue suscipit mauris finibus posuere quis sit amet justo.'} />
            <MainService icon={<FontAwesomeIcon icon={faFlask} />} heading={'Neurology'} description={'Nulla non augue suscipit mauris finibus posuere quis sit amet justo.'} />
            <MainService icon={<FontAwesomeIcon icon={faSquarePlus} />} heading={'Pharmacy'} description={'Nulla non augue suscipit mauris finibus posuere quis sit amet justo.'} />
            <MainService icon={<FontAwesomeIcon icon={faUserDoctor} />} heading={'Sleep Center'} description={'Nulla non augue suscipit mauris finibus posuere quis sit amet justo.'} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
