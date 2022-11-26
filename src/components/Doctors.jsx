import DoctorCard from './DoctorCard';
import SectionHeading from './SectionHeading';
import img1 from './doctor-1.jpeg';
import img2 from './doctor-2.jpeg';
import img3 from './doctor-3.jpeg';
import img4 from './doctor-4.jpeg';
import './Doctors.css';

function Doctors() {
  return (
    <section className={'doctors'}>
      <div className={'container'}>
        <SectionHeading heading={'Doctors'} description={'Et harum quidem rerum facilis est et expedita distinctio.'} />
        <ul className={'designation-nav'}>
          <li><a className={'active'} href={'#All'}>All (4)</a></li>
          <li><a href={'#Cardiologist'}>Cardiologist (2)</a></li>
          <li><a href={'#Psychiatrist'}>Psychiatrist (1)</a></li>
          <li><a href={'#Neurologist'}>Neurologist (1)</a></li>
        </ul>
        <div className={'doctor-cards'}>
          <DoctorCard img={img1} name={'Alice Grue'} designation={'Psychiatrist'} />
          <DoctorCard img={img2} name={'Joseph Murphy'} designation={'Cardiologist'} />
          <DoctorCard img={img3} name={'Alison Davis'} designation={'Cardiologist'} />
          <DoctorCard img={img4} name={'Adam Taylor'} designation={'Neurologist'} />
        </div>
      </div>
    </section>
  );
}

export default Doctors;
