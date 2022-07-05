import React, {useState} from "react";
import countryLanguages from "../data/languages";
import { countryData } from '../data/countries';
import '../styles/style.css';
import { FaGlobeAmericas, FaGlobeAsia, FaGlobeAfrica, FaGlobeEurope } from 'react-icons/fa'
import WorldmapApp from "./worldmap";
import InfoComponent from "./languageInfo";





function SearchBox (props) {


// ? Hooks to set state of the class (which results in changing a class's name)
const [currentClass, changeClass] = useState('searchDivs');
const [selectedDivArray, changeDivs] = useState([]);

const [languageArray, pushArray] = useState([]);
const [languageandId, newLanguageId] = useState([]);


// ? Array List of languages
function languageList () {
    for (const [key, value] of Object.entries(countryLanguages)) {
  
      function countUp () {
        let numArray = [];

          for (let x = 0; x < 185; x ++) {
              numArray.push(`num${x}`);

            //   console.log(`key: ${key}, id: ${numArray}`)



            }

            // console.log(countryLanguages.indexOf('en'), value)
            // console.log(numArray);
        // console.log({language: value.name, id:`${numArray}`})
    }

      countUp();

      if (languageArray.length < 185) {
        pushArray(prevState => [...prevState, value.name]);

        // newLanguageId(() => [...languageandId, {language: value.name, id: `num${languageArray.indexOf(value.name)}`}])
        newLanguageId(() => [...languageandId, {language: value.name, id: 1}])

        // console.log(languageArray)

        // TODO FIX The "id" part of the object
      
        // console.log(`Language: ${value.name}`);
        
        // console.log(countryData[key].languages);
        // console.log(newArray);

        // ? OLD
        // console.log({language: value.name, id: `${this.numArray}`});
    }
    


} 
    
}


languageArray.map(item => {
                    console.log({id:`num${languageArray.indexOf(item)}`, Language: item})
                })



// ? Gets the id of the Div clicked on and sends it to an array AND changes class of the selected divs
function clickEvent(e) {
    changeDivs(() => [...selectedDivArray, e.target.id]);
    // changeDivs(prevState => [...prevState, e.target.id]);

    e.target.className = 'selectedDivs';
}

let divArray = selectedDivArray;


// ? Clears list of selected languages (array) and changes className back to original
function clearLanguages () {
    // e.target.className = "searchDivs";
    // changeDivs.forEach()
    // document.getElementsByClassName('selectedDivs'[1]).className = 'searchDivs';
    for (let x = 0; x < selectedDivArray.length; x++) {
        document.getElementById(selectedDivArray[x]).className = 'searchDivs';
        // console.log(document.getElementById(selectedDivArray[x]))
    }


    changeDivs([]);

}







    return (
        <div>
        <div id="searchBox">
            <header>
                <h1 className="map"><FaGlobeAmericas className="icons"/>Worldla</h1>
                {/* <p id="langHead">Language Search</p> */}
                
                {/* <label for="langSearch" id="searchText">Search for a language:</label><br /> */}
            </header>

            <input type="search" id="langSearch" name="language" placeholder="search a language"/>
            <button id="searchButton">Search</button> 
            <button id="clearButton" onClick={() => {props.clear(); clearLanguages();}}>Clear Map</button>



        <div>
            <button onClick={languageList} id="refreshButton">Refresh List</button>

            
                {languageArray.map(item => {
                    return <div className="searchDivs" id={`num${languageArray.indexOf(item)}`} onClick={clickEvent}>{item}</div>
                })}
            
        </div>

        </div>

            <InfoComponent selectedLanguages={divArray}/>

        </div>
    )
}




export default SearchBox;



