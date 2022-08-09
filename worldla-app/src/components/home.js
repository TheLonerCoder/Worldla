import React, {useState} from 'react';
import InstructionsBox from './instructions';
import styled, { keyframes } from 'styled-components';
import { zoomIn, zoomInDown } from 'react-animations';
import { ImHome, ImMap, ImAirplane, ImSearch } from "react-icons/im";
import { GiWorld, GiBookshelf } from "react-icons/gi";

// ? Styles
const StartButton = styled.a `
    list-style: none;
    background-color: rgb(0, 168, 73);
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 1.2rem;


    &: hover {
        background-color: rgba(0, 168, 73, 0.7);
        cursor: pointer;
    }
`

const ImageLayout = styled.img `
  width: 100%;
  max-width: 500px;
  

`


// ? Animations

const zoomAnimation = keyframes`${zoomIn}`;

const ZoomDiv = styled.div`
    animation: 2s ${zoomAnimation};
`




function Home() {

  const [clickedStatus, changeClickStatus] = useState({display: 'none'});
  const [currentImage, changeImage] = useState('imgs/worldlawhite.jpg')


  function changeToBlack () {
    changeImage('imgs/worldlablack.jpg')
  }

  function changeToWhite () {
    changeImage('imgs/worldlawhite.jpg')
  }


  function showInstructions (e) {
    changeClickStatus(null);

    e.target.style.backgroundColor = '#ff0000';

  }

  return (
    <div id='homePage'>

    <ZoomDiv style={{marginBottom: '50px', marginTop: '50px'}}>
    <div id="gridbody">
    <div id='grid1'>
      <h2>What is <span className='logoName'>Worldla</span>?</h2>
      <p>
      Worlda is a platform that helps you become more aware of how learning a language opens up doors for you. It'll give resources to learn languages, show you where you can use them, etc.
      </p>
      
      <ImageLayout src="imgs/cultural.jpg" alt="" />
    </div>

    <div id='grid2'>
      <h2>Why use <span className='logoName'>Worldla</span>?</h2>

      <ul style={{listStyle: 'none'}}>
        <li><ImAirplane/> Language Map - Make traveling easier and seeing how practical your language even is, in
  terms of diminishing returns.</li>
  {/* <br /> */}
        <li id='shelf'><GiBookshelf /> Resource Connection - Connects
  you to other communities to learn a language of interest. </li>

      </ul>

      <ImageLayout src={currentImage} alt='' onMouseOver={changeToBlack} onMouseLeave={changeToWhite}/>
    </div>

    </div>

      <StartButton onClick={showInstructions}>Get Started</StartButton>
    </ZoomDiv>

    <div style={clickedStatus}>
     <InstructionsBox/>
    </div>
    </div>
  )
}

export default Home;