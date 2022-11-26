import './MainService.css';

function MainService(props) {
  return (
    <div className={'main-service'}>
      <span>{props.icon}</span>
      <div className={'service-content'}>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default MainService;
