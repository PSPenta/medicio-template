import './App.css';
import Banner from './components/Banner';
import Doctors from './components/Doctors';
import Facilities from './components/Facilities';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Carousel from './components/Carousel';
import Pricing from './components/Pricing';
import Partners from './components/Partners';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className={'App'}>
      <Banner />
      <Header />
      <Introduction />
      <Services />
      <Doctors />
      <Facilities />
      <Carousel />
      <Pricing />
      <Partners />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
