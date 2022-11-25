import './Banner.css';

function Banner() {
  return (
    <section className={'banner'}>
      <div className={'container'}>
        <p className={'banner-content'}>Monday - Saturday, 8am to 10pm</p>
        <p className={'banner-content'}>Call us now <a href={'tel:+6200865001'}>+62 008 65 001</a></p>
      </div>
    </section>
  );
}

export default Banner;
