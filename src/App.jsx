import './App.css';
import Banner from './components/Banner';
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
    </div>
  );
}

export default App;
