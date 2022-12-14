import './DoctorCard.css';

function DoctorCard(props) {
  return (
    <div className={'doctor-card'}>
      <img src={props.img} alt={props.name} />
      <a href={'#' + props.name}><h5>{props.name}</h5></a>
      <h6>{props.designation}</h6>
    </div>
  );
}

export default DoctorCard;
