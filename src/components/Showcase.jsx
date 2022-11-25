import ShowcaseInfo from './ShowcaseInfo';
import './Showcase.css';

function Showcase() {
  return (
    <div className={'info-container'}>
      <h1>Medicio medical group</h1>
      <h3>Provide <span className={'highlight'}>best quality healthcare</span> for you</h3>
      <div className={'info'}>
        <ShowcaseInfo heading={'Affordable monthly premium packages'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
        <ShowcaseInfo heading={'Choose your favorite doctor'} paragraph={'Praesent eros erat, porttitor ut mauris eget, condimentum vulputate odio.'} />
        <ShowcaseInfo heading={'Only use friendly environment'} paragraph={'Nunc et nunc at enim dapibus hendrerit.'} />
      </div>
    </div>
  );
}

export default Showcase;
