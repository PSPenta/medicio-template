import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

import './HealthPackage.css';

function HealthPackage(props) {
  return (
    <div className={props.isActive ? 'health-package active' : 'health-package'} onClick={props.selectPackage} >
      <div className={'header'}>
        <p className={'head'}>{props.package}</p>
        <p className={'sub-head'}><span>${props.price}</span> / one time</p>
      </div>
      <div className={'content'}>
        <ul>
          {props.features.map((feature, i, j) => <li key={i} className={feature.included ? '' : 'disabled'}>{feature.name}<span><FontAwesomeIcon icon={feature.included ? faCheck : faClose} /></span></li>)}
        </ul>
      </div>
      <div className={'footer'}>
      <button className={'btn'}>Purchase</button>
      </div>
    </div>
  );
}

export default HealthPackage;
