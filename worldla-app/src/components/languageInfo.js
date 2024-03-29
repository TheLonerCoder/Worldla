import React, {useState} from "react";
import countryLanguages from "../data/languages";
import { countryData } from "../data/countries";
import SearchBox from "./searchLayout";
import '../styles/style.css';
import { ImHome, ImMap, ImAirplane } from "react-icons/im";
import { GiWorld } from "react-icons/gi";
import { TiDeleteOutline as DeleteButton } from "react-icons/ti";

function InfoComponent (props) {

const [convertedLanguages, idToLang] = useState([]);
let arrayLanguages = [];

// ? Converts the ID assigned to the specified language
function idToLanguage () {

    for (const [index, element] of (props.languageAndId).entries()) {

        // console.log(element)
        // for (let x = 0; x < props.selectedLanguages.length; x++) {
        //     console.log(props.selectedLanguages[x]);
        // }

        // if (props.selectedLanguages.includes(element.id)) {
        //     idToLang(newState => [...newState, element.Language]);
        // }



        if (props.selectedLanguages.includes(element.id)) {
            arrayLanguages.push(element.Language);
        }
    }
    
}
// console.log(ArrayTest)
// console.log(convertedLanguages);



// if (props.selectedLanguages.length() === 0) {
//     console.log(`length is zero`)
// };



// let sepLangArray = () => {
//     for (let x = 0; x < ArrayTest.length; x++) {
//         console.log(<li>ArrayTest{[x]},</li>);
//     }
// }


idToLanguage();
// sepLangArray();


    return (
        <div id="infoComponent">
            <h2>
                {/* Selected Languages: {props.selectedLanguages} */}
                {/* Selected Languages: {ArrayTest} */}
                Selected Languages: 
            </h2>
                <ul>
                {/* {sepLangArray} */}
                {/* {for (let x = 0; x < ArrayTest.length; x++) {
                (<li>ArrayTest{[x]},</li>)
    }} */}

                    {arrayLanguages.map(item => {
                        return (<li id="selectedList"><p>{item}</p><DeleteButton id="deleteSelected" size={30}/></li>)
                    })}
                </ul>

        </div>
    )
}


export default InfoComponent;