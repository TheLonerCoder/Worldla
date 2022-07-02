import { countryData }  from '../data/countries.js';
import { countryLanguages } from '../data/languages.js';
import '../styles/map.css';


//* uppercases a two digit country entered and saves it to a variable
// export let countryEntered = prompt().toUpperCase();
let countryEntered = 'us';


// * searches "countryData" object based on the saved result above and filters it by country language abbreviation
let filteredLang = function searchCountry () {
    // console.log(countryData[countryEntered])
    // return countryData[countryEntered].languages;
    
    
    
    if (countryData[countryEntered] === undefined) {
        console.log(`${countryEntered} is not a valid country. Please enter a valid one!`)
        return `Invalid country`
    } else {
        // TODO filters to an array by mult languages but will have to cleanup to automate it with a loop
        return [countryData[countryEntered].languages[0], countryData[countryEntered].languages[1]];
    }
}


// * searches "countryLang" object and uses the abbreviation above to find the country language name (in English and Native Language)

let fullLanguageName = function searchLanguages () {
    // console.log(`Language : ${countryLang[filteredLang]}`);
    // TODO will always have to cleanup
    return [countryLanguages[filteredLang()[0]], countryLanguages[filteredLang()[1]]];
}






// * Find other countries that use the same language

console.log(countryEntered);
console.log(filteredLang());
// console.log(countryLang[filteredLang()]);
// searchLanguages();
console.log(fullLanguageName());
// console.log(JSON.parse(countrydata));


function DataPres () {
    return (
        <div className="langBox">
            <h1>title lul</h1>
        </div>
    )
}

export { DataPres };