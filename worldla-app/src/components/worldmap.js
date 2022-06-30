// import './App.css';
import React, { useState } from 'react';
import Worldmap from 'react-svg-worldmap';
// import './styles/map.css'
import { countryLang } from '../data/languages';
import { countryData } from '../data/countries';
import SearchBox from './searchLayout';

function WorldmapApp() {
  
  const [country, pushCountry] = useState([]);
  

  const countryLang = () => {

    pushCountry(prevState => [...prevState, {country: "us", value: 1000000}]);
  }


// ? Search countries to find other languages
  function searchCountries () {
    // document.getElementById('')

    let lang = 'en';

  }



  const testObj = [
    {country: "us", value: 1000000},
    {country: "GB", value: 1000000},
    {country: "SA", value: 1000000},
    {country: "gg", value: 1000000}

  ]


// ? Loops through keys of an object and isolates the laguages

function testing () {
  for (const [key, value] of Object.entries(countryData)) {
    // let newArray = key;

    if (countryData[key].languages.includes('en')) {
      pushCountry(prevState => [...prevState, {country: key, value:100}])
      

      console.log(key) ;
    } 


    // console.log(countryData[key].languages);
    // console.log(newArray);
  }
}



function french () {
  for (const [key, value] of Object.entries(countryData)) {
    // let newArray = key;

    if (countryData[key].languages.includes('fr')) {
      pushCountry(prevState => [...prevState, {country: key, value:100}])
      

    } 

  }
}

// function tested () {
//   for (const [key, value] of Object.entries(testObj)) {
//       pushCountry(prevState => [...prevState, {country: value.country, value: 100000}])
//   }
// }




  // console.log(countryData.{}.language)


function clearMap () {
  pushCountry([]);
}







  return (
    <div className="App">

          <Worldmap 
            color="lightgreen"
            value-suffix="languages"
            size="xl"
            data={country}
            richInteraction
            // onClickFunction={clickAction}
            // frame

          />


          <SearchBox id="grid2" tested={testing} clear={clearMap} frenches={french}/>

          <div className="langBox">
               
              {/* <input type="text" id='textBox'/> */}

                      {/* <input type="checkbox" id='english' onClick={tested}/> English */}
                      {/* <input type="checkbox" id='english' onClick={testing}/> English
                      <input type="checkbox" id='spanish'/> Spanish
                      <input type="checkbox" id='french'/> French
                      <input type="checkbox" id='polish'/> Polish */}

{/* 
                      <button id='english' onClick={testing}> English </button>
                      <button id='spanish'> Spanish </button>
                      <button id='french'> French </button>
                      <button id='polish'> Polish </button>

                      <button onClick={clearMap} id="clearBtn">clear</button> */}

            </div>      

                {/* <h2>{clickAction}</h2> */}
                {/* ()=>{ f1(); f2() } */}

              
    </div>
  );
}

export default WorldmapApp;
