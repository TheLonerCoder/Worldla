import React, {useState} from "react";
import countryLanguages from "../data/languages";
import { countryData } from '../data/countries';
import '../styles/style.css';
import { FaGlobeAmericas, FaGlobeAsia, FaGlobeAfrica, FaGlobeEurope } from 'react-icons/fa'
import WorldmapApp from "./worldmap";



// function changeDivColor () {
//     if (document.getElementsByClassName('iconics'[0]).style.backgroundColor = 'white') {
//         document.getElementsByClassName('iconics'[0]).style.backgroundColor = 'black'
//     } else {document.getElementsByClassName('iconics'[0]).style.backgroundColor = 'white'}
// }



function SearchBox (props) {

// const changeDivColor = event => {
//     if (event.currentTarget.style.backgroundColor === 'white') {
//         event.currentTarget.style.backgroundColor = 'black'
//     } else {event.currentTarget.style.backgroundColor = 'white'}
// }

// const [color, changeColor] = useState('white');
// const [textColor, changeTextColor] = useState('grey');

// function divColors () {
//     if (color === 'white') {
//         changeColor('#2f4858');
//         changeTextColor('white')
//     } else {
//         (changeColor('white'));
//         (changeTextColor('grey'))
//     }
//     console.log(`changedColor: ${color}`)
// }

// console.log(color);

// clickEvents() {
//     divColors();
//     props.tested;
// }


// ? Hooks to set state of the class (which results in changing a class's name)
const [currentClass, changeClass] = useState('searchDivs');
const [selectedDivArray, changeDivs] = useState([]);

const [languageArray, pushArray] = useState([]);




// ? Array List of languages
function languageList () {
    for (const [key, value] of Object.entries(countryLanguages)) {
      // let newArray = key;
  
      if (languageArray.length < 185) {
        pushArray(prevState => [...prevState, value.name]);
      } 
      // console.log(`Language: ${value.name}`);
  
      // console.log(countryData[key].languages);
      // console.log(newArray);
    }
    
  }
  
//   let languageLists = languageArray;
  
//   console.log(languageArray);
//   console.log(`Language List: ${languageLists}`);

  // console.log(`Language Chosen: ${languageArray[184]}`);
  // console.log(`Array Length ${languageArray.length}`);
  // languageList();
  
  
  
  // ? Converting Array Language list into li/list items






// ? Puts selected divs into an array 
function divArray () {
    changeDivs()
}




// ? Function to change background and color of a selected Divs (onClick)
function selectedDivs () {
    // if (currentClass === 'searchDivs') {
    //     changeClass('selectedDivs')
    // } else {changeClass('searchDivs')}
    console.log(`Current Class: ${currentClass}`);

}




    return (
        <div id="searchBox">
            <header>
                <h1 className="map"><FaGlobeAmericas className="icons"/>Worldla</h1>
                {/* <p id="langHead">Language Search</p> */}
                
                {/* <label for="langSearch" id="searchText">Search for a language:</label><br /> */}
            </header>

            <input type="search" id="langSearch" name="language" placeholder="search a language"/>
            <button id="searchButton">Search</button> 
            <button id="clearButton" onClick={props.clear}>Clear Map</button>


            {/* <div className={currentClass} onClick={() => {props.tested(); selectedDivs();}} ><FaGlobeAmericas className="iconics"/>  English</div>

            <div className="searchDivs"><FaGlobeAmericas className="iconics"/>  Spanish</div>

            <div className="searchDivs" onClick={props.frenches}><FaGlobeEurope className="iconics"/>  French</div>

            <div className="searchDivs" onClick={() => {console.log('polish')}}><FaGlobeEurope className="iconics"/>  Polish</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Japanese</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Mandarin Chinese</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Hindu</div>
            <div className="searchDivs"><FaGlobeAfrica className="iconics"/>  Arabic</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Bengali</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Russian</div>
            <div className="searchDivs"><FaGlobeAmericas className="iconics"/>  Portuguese</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Indonesian</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Urdu</div>
            <div className="searchDivs"><FaGlobeEurope className="iconics"/>  German</div>
            <div className="searchDivs"><FaGlobeAfrica className="iconics"/>  Swahili</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Marathi</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Telugu</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Punjabi</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Tamil</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Turkish</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Korean</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Vietnamese</div>
            <div className="searchDivs"><FaGlobeAfrica className="iconics"/>  Hausa</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Iranian Persian (Farsi)</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Thai</div>
            <div className="searchDivs"><FaGlobeEurope className="iconics"/>  Ukrainian</div>
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Burmese</div> */}


        <div>
            <button onClick={languageList} id="refreshButton">Refresh List</button>

            
                {languageArray.map(item => {
                    return <div className="searchDivs">{item}</div>
                })}
            
        </div>
        </div>
    )
}




// style={{background: color, color: textColor}} onClick={() => {props.tested(); divColors();}}
// style={{background: color, color: textColor}} onClick={() => {props.frenches(); divColors();}}



{/* <ul>
{
    for (const [key, value] of Object.entries(countryLanguages)) {

           if (languageArray.length < 185) {
           return (<li>{value.name}</li>)} 
           }
    }

</ul> */}

export default SearchBox;



