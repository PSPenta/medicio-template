import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './ShowcaseInfo.css';

function ShowcaseInfo(props) {
  return (
    <div className={'showcase-info'}>
      <div className={'info-icon'}>
        <span><FontAwesomeIcon icon={faCheck} /></span>
      </div>
      <div className={'info-text'}>
        <h5>{props.heading}</h5>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default ShowcaseInfo;
