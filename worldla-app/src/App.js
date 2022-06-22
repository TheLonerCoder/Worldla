// import logo from './logo.svg';
// import map from './imgs/world.svg'
import './styles/map.css';
import './App.css';
import Maps from './components/map';
import { DataPres } from './components/mapInfo';
// import { dataPres } from './components/mapInfo';


function App() {
  return (
    <div className="App">

      {/* <img src={map} alt="world-map" /> */}
      <div className="map">
        <h1>Worldla</h1>
        {/* {countryEntered} */}
        <DataPres />
        {/* <Maps /> */}
      </div>

      {/* <svg>
        <use href='#maps'></use>
      </svg>

      <img src="world.svg" alt="map" id='maps'/> */}
      {/* <img src="BlankMap-World.svg" alt="map2" /> */}
    </div>
  );
}

export default App;
