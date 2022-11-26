import './SectionHeading.css';

function SectionHeading(props) {
  return (
    <div className={'heading'}>
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
      <hr />
    </div>
  );
}

export default SectionHeading;
