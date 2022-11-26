import './ServiceStep.css';

function ServiceStep(props) {
  return (
    <div className={'primary-service'}>
      <span>{props.icon}</span>
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default ServiceStep;
