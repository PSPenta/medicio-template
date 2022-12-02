/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from 'react';

import SectionHeading from './SectionHeading';

import img1 from './banner.jpeg';
import img2 from './facility-2.jpeg';
import img3 from './facility-3.jpeg';
import img4 from './facility-4.jpeg';
import img5 from './facility-5.jpeg';
import img6 from './facility-6.jpeg';

import './Facilities.css';

function Facilities() {
  let [slider, setSlider] = useState([]);
  let [activeNav, setActiveNav] = useState(0);

  let sliderImages = [
    {
      image: img1,
      alt: 'Facility title'
    },
    {
      image: img2,
      alt: 'Facility title'
    },
    {
      image: img3,
      alt: 'Facility title'
    },
    {
      image: img4,
      alt: 'Facility title'
    },
    {
      image: img5,
      alt: 'Facility title'
    },
    {
      image: img6,
      alt: 'Facility title'
    }
  ];
  slider = sliderImages.filter((sliderImage, i, j) => (i >= (activeNav * 4) && i < ((activeNav * 4) + 4)));

  let sliderNavCount = Math.ceil(sliderImages.length / 4);

  let makeActive = (e) => {
    let allNavs = document.getElementsByClassName('slider__navlink');
    for (let index = 0; index < allNavs.length; index++) {
      document.getElementsByClassName('slider__navlink')[index].classList.remove('active');
    }

    e.target.classList.add('active');

    let currentActiveNav = e.target.id.split('slider__navlink_')[1];
    setActiveNav(currentActiveNav);

    setSlider(sliderImages.filter((sliderImage, i, j) => (i >= (currentActiveNav * 4) && i < ((currentActiveNav * 4) + 4))));
  };

  // setInterval(() => {
  //   let currentActiveNav = activeNav + 1;
  //   if (currentActiveNav >= sliderNavCount) {
  //     currentActiveNav = 0;
  //   }
  //   setActiveNav(currentActiveNav);

  //   setSlider(sliderImages.filter((sliderImage, i, j) => (i >= (currentActiveNav * 4) && i < ((currentActiveNav * 4) + 4))));
  // }, 5000);

  return (
    <section className={'facilities'}>
      <div className={'container'}>
        <SectionHeading heading={'Our facilities'} description={'Et harum quidem rerum facilis est et expedita distinctio.'} />
        <div className={'facility-slider'}>
          {slider.map((sliderImage, i, j) => <img key={i} src={sliderImage.image} alt={sliderImage.alt} />)}
        </div>
        <div className={'slider__nav'}>
          {
            [...Array(sliderNavCount)].map((sliderNav, i, j) => <span key={i} id={'slider__navlink_'+i} className={(activeNav === i) ? 'slider__navlink active' : 'slider__navlink'} onClick={makeActive}></span>)
          }
        </div>
      </div>
    </section>
  );
}

export default Facilities;
