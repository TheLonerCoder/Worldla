import React from 'react';
import '../styles/header.css';

function WorldlaHeader() {
  return (
    <div>
      <h1 className="logoHeader">Worldla</h1>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="#lay1">How to Use</a></li>
        </ul>
    </div>
  )
}

export default WorldlaHeader