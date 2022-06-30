import React, {useState} from "react";
import { countryLang } from '../data/languages';
import { countryData } from '../data/countries';
import '../styles/style.css';
import { FaGlobeAmericas, FaGlobeAsia, FaGlobeAfrica, FaGlobeEurope } from 'react-icons/fa'
import WorldmapApp from "./worldmap";

function SearchBox (props) {
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


            <div className="searchDivs" onClick={props.tested}><FaGlobeAmericas className="iconics"/>  English</div>
            <div className="searchDivs"><FaGlobeAmericas className="iconics"/>  Spanish</div>
            <div className="searchDivs" onClick={props.frenches}><FaGlobeEurope className="iconics"/>  French</div>
            <div className="searchDivs"><FaGlobeEurope className="iconics"/>  Polish</div>
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
            <div className="searchDivs"><FaGlobeAsia className="iconics"/>  Burmese</div>
        </div>
    )
}


export default SearchBox;



