import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Testimonial from './Testimonial';

import img1 from './images/testimonial-1.jpeg';
import img2 from './images/testimonial-2.jpeg';
import img3 from './images/testimonial-3.jpeg';
import img4 from './images/testimonial-4.jpeg';
import img5 from './images/testimonial-5.jpeg';
import img6 from './images/testimonial-6.jpeg';

import './Carousel.css';

function Carousel() {
  let [slider, setSlider] = useState([]);
  let [activeNav, setActiveNav] = useState(0);

  let testimonials = [
    {
      title: 'Birth control pills',
      rating: 4,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: img1,
      name: 'Lucas Thompson',
      location: 'Austin, Texas'
    },
    {
      title: 'Radiology',
      rating: 2,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: img2,
      name: 'Ella Mentree',
      location: 'Fort Worth, Texas'
    },
    {
      title: 'Cervical Lesions',
      rating: 6,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: img3,
      name: 'Suzanne Adam',
      location: 'Austin, Texas'
    },
    {
      title: 'Emergency Contraception',
      rating: 4,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: img4,
      name: 'Anna',
      location: 'Chicago, Illinois'
    },
    {
      title: 'Orthopedic Surgery',
      rating: 2,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: img5,
      name: 'Matthew G',
      location: 'San Antonio, Texas'
    },
    {
      title: 'Medical consultation',
      rating: 6,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: img6,
      name: 'Scarlet Smith',
      location: 'Dallas, Texas'
    }
  ];

  slider = testimonials.filter((sliderImage, i, j) => (i >= (activeNav * 3) && i < ((activeNav * 3) + 3)));

  let slide = (e) => {
    let currentActiveNav = 0;
    let sliderNavCount = Math.ceil(testimonials.length / 3);

    if (e.target.parentNode.className.includes('left') && activeNav > 0) {
      currentActiveNav = activeNav - 1;
    } else if (e.target.parentNode.className.includes('right') && activeNav < sliderNavCount) {
      currentActiveNav = activeNav + 1;
    }
    setActiveNav(currentActiveNav);

    setSlider(testimonials.filter((sliderImage, i, j) => (i >= (currentActiveNav * 3) && i < ((currentActiveNav * 3) + 3))));
  };

  return (
    <section id={'carousel'}>
      <div className={'background-image'}></div>
      <div className={'container'}>
        {
          slider.map((testimonial, i, j) => <Testimonial
            key={i}
            title={testimonial.title}
            rating={testimonial.rating}
            description={testimonial.description}
            image={testimonial.image}
            name={testimonial.name}
            location={testimonial.location}
          />)
        }
        <div className={'traverse-left'} onClick={slide}><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className={'traverse-right'} onClick={slide}><FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    </section>
  );
}

export default Carousel;
