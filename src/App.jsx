import './App.css';
import Banner from './components/Banner';
import Doctors from './components/Doctors';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';

function App() {
  return (
    <div className={'App'}>
      <Banner />
      <Header />
      <Introduction />
      <Services />
      <Doctors />
    </div>
  );
}

export default App;
