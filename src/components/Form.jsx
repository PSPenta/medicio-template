import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import FormInput from './FormInput';
import './Form.css';

function Form() {
  let bookAppointment = () => {
    return;
  };

  return (
    <div className={'form-container'}>
      <div className={'form-header'}>
        <span><FontAwesomeIcon icon={faPenToSquare} /></span>
        <h2>Make an appointment</h2>
        <p>(It's free!)</p>
      </div>
      <form>
        <div className={'form-fields'}>
          <FormInput inputType={'text'} formField={'fname'} label={'First Name'} />
          <FormInput inputType={'text'} formField={'lname'} label={'Last Name'} />
          <FormInput inputType={'email'} formField={'email'} label={'Email'} />
          <FormInput inputType={'text'} formField={'phone'} label={'Phone number'} />
        </div>
        <button className={'btn'} onClick={bookAppointment}>Submit</button>
      </form>
      <p>* We'll contact you by phone and email later</p>
    </div>
  );
}

export default Form;
