import './App.css';
import Banner from './components/Banner';
import Doctors from './components/Doctors';
import Facilities from './components/Facilities';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Carousel from './components/Carousel';

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
    </div>
  );
}

export default App;
