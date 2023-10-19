import AnimeCard from './AnimeCard';
import CurrentDate from './CurrentDate';
import CardsContainer from './CardsContainer';
import './App.css';

function App() {
  
  function getDayName() {
    const date = new Date();
    return date.toLocaleDateString("en-US", { weekday: 'long' });
  }

  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US",{month:'short'});

  return (
    <>    
      <CurrentDate CurrentDateMonth= {day +" "+month} CurrentDateDay={getDayName()}></CurrentDate>
      <CardsContainer CurrentDateDay={getDayName()}></CardsContainer>
    </>
  );
}

export default App;
