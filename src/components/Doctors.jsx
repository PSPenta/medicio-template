import { useState } from 'react';

import DoctorCard from './DoctorCard';
import SectionHeading from './SectionHeading';

import img1 from './doctor-1.jpeg';
import img2 from './doctor-2.jpeg';
import img3 from './doctor-3.jpeg';
import img4 from './doctor-4.jpeg';

import './Doctors.css';

function Doctors() {
  let [doctors] = useState([]);
  let [filter, setFilter] = useState('');

  doctors = [
    {
      image: img1,
      name: 'Alice Grue',
      designation: 'Psychiatrist'
    },
    {
      image: img2,
      name: 'Joseph Murphy',
      designation: 'Cardiologist'
    },
    {
      image: img3,
      name: 'Alison Davis',
      designation: 'Cardiologist'
    },
    {
      image: img4,
      name: 'Adam Taylor',
      designation: 'Neurologist'
    }
  ];

  let allDesignations = {
    All: doctors.length
  };
  const designations = doctors.map(doctor => doctor.designation).reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  allDesignations = {...allDesignations, ...designations};

  let designationArr = Object.keys(allDesignations);
  let designationCount = Object.values(allDesignations);

  let filterDesignations = (e) => {
    designationArr.forEach(designation => {
      document.getElementById(designation).classList.remove('active');
    });
    e.target.classList.add('active');
    setFilter((e.target.id === 'All' ? '' : e.target.id));
  };

  return (
    <section className={'doctors'}>
      <div className={'container'}>
        <SectionHeading heading={'Doctors'} description={'Et harum quidem rerum facilis est et expedita distinctio.'} />
        <ul className={'designation-nav'}>
          {designationArr.map((designation, i, j) => {
            return <li key={i} onClick={filterDesignations} id={designation} className={(filter === '' && designation === 'All') ? 'active' : ''} >{designation} ({designationCount[i]})</li>;
          })}
        </ul>
        <div className={'doctor-cards'}>
          {
            (filter === '') 
              ? (doctors
                .map((doctor, i, j) => <DoctorCard key={i} img={doctor.image} name={doctor.name} designation={doctor.designation} />)
              )
              : (doctors
                .filter(doctor => doctor.designation === filter)
                .map((doctor, i, j) => <DoctorCard key={i} img={doctor.image} name={doctor.name} designation={doctor.designation} />)
              )
          }
        </div>
      </div>
    </section>
  );
}

export default Doctors;
