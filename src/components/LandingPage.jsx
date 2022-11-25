import Showcase from './Showcase';
import Form from './Form';
import './LandingPage.css';

function LandingPage() {
  return (
    <section className={'landing-page'}>
      <div className={'background-image'}></div>
      <div className={'container'}>
        <Showcase />
        <Form />
      </div>
    </section>
  );
}

export default LandingPage;
