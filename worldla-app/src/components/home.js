import React, {useState} from 'react';
import InstructionsBox from './instructions';
import styled, { keyframes } from 'styled-components';
import { zoomIn, zoomInDown } from 'react-animations';

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


// ? Animations

const zoomAnimation = keyframes`${zoomIn}`;

const ZoomDiv = styled.div`
    animation: 2s ${zoomAnimation};
`




function Home() {

  const [clickedStatus, changeClickStatus] = useState({display: 'none'});

  function showInstructions (e) {
    changeClickStatus(null);

    e.target.style.backgroundColor = '#ff0000';

  }

  return (
    <div>

    <ZoomDiv style={{marginBottom: '50px'}}>
    <div id="gridbody">
    <div id='grid1'>
      <h2>What is Worldla?</h2>
      <p>
      Worlda is a platform that helps you become more aware of how learning a language opens up doors for you. It'll give resources to learn languages, show you where you can use them, etc.
      </p>
      
    </div>

    <div id='grid2'>
      <h2>Why use Worldla?</h2>
      <li>test</li>
      <li>test</li>
      <li></li>
      <li></li>
      <li></li>

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