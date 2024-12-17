import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'; //used for styling components using css in js

// Create a styled button
const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;
function App() {

  return (
    <>
    <header>
    <nav>
      <ul className="navbar">
        <li>home</li>
       <li>blogs</li>
        <li>about us</li>
        <li>donate us</li>
      </ul>
    </nav>
    <StyledButton>Click Me</StyledButton>
    </header>
    <div className='body'>
       hello
    </div>
    </>
  )
}


 

export default App;
