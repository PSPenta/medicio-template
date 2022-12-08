import SectionHeading from './common/SectionHeading';

import partner1 from './images/partner-1.jpg';
import partner2 from './images/partner-2.jpg';
import partner3 from './images/partner-3.jpg';
import partner4 from './images/partner-4.jpg';
import './Partners.css';

function Partners() {
  return (
    <section className={'partners'}>
      <div className={'container'}>
        <SectionHeading heading={'Our partner'} description={'Take charge of your health today with our specially designed health packages'} />
        <div className={'partner-logos'}>
          <a href={'#Partner1'}><img src={partner1} alt={'Pharmacy'} /></a>
          <a href={'#Partner2'}><img src={partner2} alt={'dumbhospital'} /></a>
          <a href={'#Partner3'}><img src={partner3} alt={'Stainless'} /></a>
          <a href={'#Partner4'}><img src={partner4} alt={'MainStream'} /></a>
        </div>
      </div>
    </section>
  );
}

export default Partners;
