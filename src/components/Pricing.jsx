import { useState } from 'react';

import SectionHeading from './common/SectionHeading';
import HealthPackage from './HealthPackage';

import './Pricing.css';

function Pricing() {
  let [activePackage, setActivePackage] = useState(1);

  let selectPackage = (e) => {
    setActivePackage(e.target.value);
  };

  let healthPackages = [
    {
      package: 'Basic Fit 1 package',
      price: '33.99',
      features: [
        {
          name: 'Anthropometry (BMI, WH Ratio)',
          included: true
        },
        {
          name: 'Post Examination Review',
          included: true
        },
        {
          name: 'General Screening – Basic',
          included: true
        },
        {
          name: 'Health Screening Report',
          included: false
        }
      ]
    },
    {
      package: 'Golden Glow Package',
      price: '65.99',
      features: [
        {
          name: 'Anthropometry (BMI, WH Ratio)',
          included: true
        },
        {
          name: 'Post Examination Review',
          included: true
        },
        {
          name: 'General Screening – Basic',
          included: true
        },
        {
          name: 'Body Composition Analysis',
          included: true
        },
        {
          name: 'GR Assessment & Scoring',
          included: true
        }
      ]
    },
    {
      package: 'Basic Fit 2 package',
      price: '47.99',
      features: [
        {
          name: 'Anthropometry (BMI, WH Ratio)',
          included: true
        },
        {
          name: 'Post Examination Review',
          included: true
        },
        {
          name: 'General Screening – Regular',
          included: true
        },
        {
          name: 'Health Screening Report',
          included: false
        }
      ]
    }
  ];

  return (
    <section id={'pricing'}>
      <div className={'container'}>
        <SectionHeading heading={'Health packages'} description={'Take charge of your health today with our specially designed health packages'} />
        <div className={'health-packages'}>
          {
            healthPackages.map((healthPackage, i, j) => <HealthPackage
              key={i}
              isActive={activePackage === i ? true : false}
              package={healthPackage.package}
              price={healthPackage.price}
              features={healthPackage.features}
              state={selectPackage}
            />)
          }
        </div>
      </div>
    </section>
  );
}

export default Pricing;
