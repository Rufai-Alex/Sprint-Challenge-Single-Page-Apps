import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Button = Styled.button`
display: flex;
margin-bottom: 10px;
margin-top: 15px;
width: 150px;
height: 35px;
background: linear-gradient(to right, "#C471ED","#F64F59");
text-align: center;
color: black;
box-shadow: 0px 0px 5px 1px black;

`;

export default function Header() {
  return (
    <header className='ui centered'>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      <Link to='/characters'>
        <Button>Characters</Button>
      </Link>
    </header>
  );
}
