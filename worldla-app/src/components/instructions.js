import React from "react";
import '../styles/style.css'


function InstructionsBox () {
    return (
        <div className="instructionsBox">
            <h1>How to use</h1>
            <ol id="howToUse">
                <li id="how1">
                    <p>Load the list of languages by clicking <button id="refreshButton">Refresh List</button></p>
                    <img src="imgs/how1.gif" alt="how1" />
                </li>

                <li id="how2">
                    <p>Double click a language to load it on the map  <button id="refreshButton">Refresh List</button></p>
                    <img src="imgs/how2.gif" alt="how2" />
                </li>

                <li id="how3">
                    <p>Zoom in (and out) of the map by double clicking  <button id="refreshButton">Refresh List</button></p>
                    <img src="imgs/how3.gif" alt="how3" />
                </li>

                
                <li id="how4">
                    <p>Use <button id="clearButton" >Clear Map</button> to empty the list of selected languages</p>
                </li>
                
            </ol>
        </div>
    )
}

export default InstructionsBox;