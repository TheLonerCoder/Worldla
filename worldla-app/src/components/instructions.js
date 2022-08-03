import React from "react";
import '../styles/instruction.css';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import '../styles/style.css';
// import '../styles/instruction.css';



// const Modal = () => (
//     <Popup trigger={<button className="button"> Open Modal </button>} modal>
//       <span> Modal content </span>
//     </Popup>
//   );




function InstructionsBox () {
    return (
        <div className="instructionsBox">
            
            <h1>How to use</h1>
            <ul id="howToUse">
                <li id="how1">
                    <h4>1. Load the list of languages by clicking <br /> <button id="refreshButton">Refresh List</button></h4>
                    <img src="imgs/how1.gif" alt="how1" />
                </li>

                <li id="how2">
                    <h4>2. Double click a language to load it on the map  <button id="refreshButton">Refresh List</button></h4>
                    <img src="imgs/how2.gif" alt="how2" />
                </li>

                <li id="how3">
                    <h4>3. Zoom in (and out) of the map by double clicking</h4>
                    <img src="imgs/how3.gif" alt="how3" />
                </li>

                
                <li id="how4">
                    <h4>4. Use <button id="clearButton" >Clear Map</button> to empty the list of selected languages</h4>
                </li>
                
            </ul>
        </div>
    )
}

export default InstructionsBox;