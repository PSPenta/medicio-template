import Showcase from './Showcase';
import Form from './Form';
import './Introduction.css';

function Introduction() {
  return (
    <section className={'introduction'}>
      <div className={'background-image'}></div>
      <div className={'container'}>
        <Showcase />
        <Form />
      </div>
    </section>
  );
}

export default Introduction;
