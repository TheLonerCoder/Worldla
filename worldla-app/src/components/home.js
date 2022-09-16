import React, {useState} from 'react';
import InstructionsBox from './instructions';
import styled, { keyframes } from 'styled-components';
import { zoomIn, zoomInDown } from 'react-animations';
import { ImHome, ImMap, ImAirplane, ImSearch } from "react-icons/im";
import { GiWorld, GiBookshelf } from "react-icons/gi";
import { Link } from 'react-scroll';
import { BsChevronCompactDown as DownArrow } from "react-icons/bs";
// import WorldmapBackground from ''

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

// const homePage = {
//   backgroundImage: 
// }



// ? Animations

const zoomAnimation = keyframes`${zoomIn}`;

const ZoomDiv = styled.div`
    animation: 2s ${zoomAnimation};
`




function Home() {

  const [clickedStatus, changeClickStatus] = useState({display: 'none'});
  // const [clickedStatus, changeClickStatus] = useState({visibility: 'collapse'});
  const [currentImage, changeImage] = useState('Worldla/imgs/worldlawhite.jpg')
  const [buttonStatus, changeButtonStatus] = useState()
  const [arrowStatus, changeArrowStatus] = useState({display: 'none'})


  function changeToBlack () {
    changeImage('Worldla/imgs/worldlablack.jpg')
  }

  function changeToWhite () {
    changeImage('Worldla/imgs/worldlawhite.jpg')
  }


  function showInstructions (e) {
    changeClickStatus(null);

    // e.target.style.backgroundColor = '#ff0000';
      e.target.style.display = 'none';
      changeArrowStatus({display: 'inline'});

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
      
      <ImageLayout src="Worldla/imgs/cultural.jpg" alt="" />
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
      <Link to="startScroll" smooth={true} offset={10} duration={500} onClick={showInstructions} id="startButton" style={buttonStatus}>
          Start
      </Link>
      
      <Link to="instructionsBox" smooth={true} offset={0} duration={250}>
      <DownArrow style={arrowStatus} size={'2rem'} id='arrowButton'/>

      </Link>
      {/* <StartButton onClick={showInstructions}>Get Started</StartButton> */}
    </ZoomDiv>

    <div id='startScroll'></div>

    <div style={clickedStatus}>
     <InstructionsBox/>
    </div>

    </div>
  )
}

export default Home;