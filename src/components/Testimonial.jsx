import './Testimonial.css';

function Testimonial(props) {
  let totalRating = 6;
  let rating = '';
  for (var i = 0; i < totalRating; i++) {
    rating += (props.rating > i) ? '*' : '#';
  }

  return (
    <div className={'testimonial'}>
      <div className={'testimonial-heading'}>
        <h2>{props.title}</h2>
        <h4>{'My rating: ' + rating}</h4>
        <p>{props.description}</p>
      </div>
      <div className={'testimonial-triangle-arrow'}></div>
      <div className={'user-info'}>
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <p>{props.location}</p>
      </div>
    </div>
  );
}

export default Testimonial;
