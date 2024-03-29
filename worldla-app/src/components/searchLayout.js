import React, {useState} from "react";
import countryLanguages from "../data/languages";
import { countryData } from '../data/countries';
import '../styles/style.css';
import '../styles/worldmap.css';
import { FaGlobeAmericas, FaGlobeAsia, FaGlobeAfrica, FaGlobeEurope } from 'react-icons/fa'
import WorldmapApp from "./worldmap";
import InfoComponent from "./languageInfo";
import InstructionsBox from "./instructions";
import { ImHome, ImMap, ImAirplane, ImSearch } from "react-icons/im";
import { FaSearch as SearchIcon } from "react-icons/fa";
import styled from 'styled-components';


// ? Styling

const SearchDiv = styled.div `
    display: inline-block;

    svg {
        margin-right: 5px;
        position: relative;
        top: 3px;
    }

`



function SearchBar (props) {

    const [value, updateValue] = useState('');

    const onChange = (event) => {
        updateValue(event.target.value)
    }


    const onSearch = (searchTerm) => {
        // return (searchTerm)
        console.log(`search ${searchTerm}`)
    }

    return (
        <div className="worldlaSearchBox">

                <ImSearch />
                <input type="text" id="langSearchBar" name="language" placeholder="search a language" size={40} value={value} onChange={onChange}/>
                <button onClick={() => onSearch(value)}>Search</button>

                 <h1>{onSearch}</h1>
                {/* <textarea name="" id="noteTitle" cols="10" rows="1" maxLength="20" placeholder="Search a language"></textarea> */}
                {/* <button id="searchButton" onClick={(e) => {newTest(e); newerTest();}}>Search</button> 
                <button id="clearButton" onClick={() => {props.clear(); clearLanguages();}}>Clear Map</button> */}
        </div>
    )
}




// * props = country, pushCountry, clear, etc
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



// ? Array of objects with an ID and the language name

let languageId = languageArray.map(items => {
                    return {id:`num${languageArray.indexOf(items)}`, Language: items}
                })



// ? Gets the id of the Div clicked on and sends it to an array AND changes class of the selected divs
function clickEvent(e) {
    changeDivs(() => [...selectedDivArray, e.target.id]);
    // changeDivs(prevState => [...prevState, e.target.id]);
    
    e.target.className = 'selectedDivs';


    // function newerTest () {
    //     newTest();
    // };

    // newTest();

    // if (props.country.length === 0) {
    //     newTest();
    // }

    // if (props.country.length === 0) {
    //     console.log(props.country);
    // }

// let testing = (function() {
//     let excuted = false;
//     return function() {
//         if (!excuted) {
//             excuted = true
//         }
//     }
// })();

// testing();
// testing();
    
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





// ? Translate id to country

let arrayLanguages = [];


function newTest () {


    for (const [index, element] of (languageId).entries()) {


if (divArray.includes(element.id)) {
    arrayLanguages.push(element.Language);
}
}

// console.log(arrayLanguages);


    for (const [keys, values] of Object.entries(countryLanguages)) {
        // console.log(keys, values);

        for (let x = 0; x < arrayLanguages.length; x++) {
            // if (values.name === divArray[x]) {
            //     console.log(keys)
            // }
            if (values.name === arrayLanguages[x]) {
                // console.log(keys)

                


                for (const [key, value] of Object.entries(countryData)) {

                    // console.log(value.languages)

                    if (value.languages.includes(keys)) {
                        // props.pushCountry(prevState => [...prevState, {country: key, value:100}])
                        // console.log(key);
                        // console.log(key)
                        props.pushCountry(pastKeys => [...pastKeys, {country: key, value:100}])
                    }



                }






                // props.pushCountry(prevState => [...prevState, {country: keys, value:100}])
            }
        }
    }

// console.log(divArray);


}



    function newerTest () {
        // newTest();
        console.log('test')
    };




// console.log(props.country);
// TODO change search and div onClicks, etc

    return (
        <div className="searchContainer">
        {/* <button onClick={newTest}>test</button> */}
        <div id="searchBox">
        <div className="worldlaSearch">
            <SearchDiv>
            {/* <ImSearch /> */}
            <SearchIcon/>
            <input type="text" id="langSearch" name="language" placeholder="search a language"/>

            </SearchDiv>
            <button id="searchButton" onClick={(e) => {newTest(e); newerTest();}}>Search</button> 
            <button id="clearButton" onClick={() => {props.clear(); clearLanguages();}}>Clear Map</button>
        </div>

        <div>
            <button onClick={languageList} id="refreshButton">Refresh List</button>

            
                {languageArray.map(item => {
                    return <div className="searchDivs" id={`num${languageArray.indexOf(item)}`} onClick={(e) => {newTest(e); clickEvent(e);}}>{item}</div>
                })}
                {/* {languageArray.map(item => {
                    return <div className="searchDivs" id={`num${languageArray.indexOf(item)}`} onDoubleClick={clickEvent}
                    onClick={newTest}>{item}</div>
                })} */}
            
        </div>

        



        </div>


            <InfoComponent selectedLanguages={divArray} languageAndId = {languageId}/>

        </div>
    )
}




export  {SearchBox, SearchBar};



