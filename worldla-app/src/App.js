// import logo from './logo.svg';
// import map from './imgs/world.svg'
import './styles/map.css';
import './App.css';
import Maps from './components/map';
// import { DataPres } from './components/mapInfo';
import WorldmapApp from './components/worldmap';
import SearchBox from './components/searchLayout';
// import { dataPres } from './components/mapInfo';
import WorldlaHeader from './components/header';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function App() {
  return (
    <div className="App">


      
      {/* <img src={map} alt="world-map" /> */}
      {/* <div className="map">
        <h1>Worldla</h1>
      </div> */}
      <WorldlaHeader />



      <div id='Appbody'>
        <WorldmapApp id="grid1"/>
        
        {/* {countryEntered} */}
        {/* <DataPres /> */}
        {/* <Maps /> */}

      {/* <svg>
        <use href='#maps'></use>
      </svg>

      <img src="world.svg" alt="map" id='maps'/> */}
      {/* <img src="BlankMap-World.svg" alt="map2" /> */}
      
        {/* <SearchBox id="grid2"/> */}
      </div>
    </div>
  );
}

export default App;
