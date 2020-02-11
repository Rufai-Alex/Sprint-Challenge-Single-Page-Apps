import React from "react";
import Styled from "styled-components";

const Styleddiv = Styled.div`    
display: flex;
 justify-content: center;
 flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  align-items: center;
  img{    width: 150px;   	
  height: 150px;
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
 
   `;

export default function CharacterCard(props) {
  return (
    <Styleddiv>
      <div>{props.data.name}</div>
      <div>{props.data.gender}</div>
      <div>
        <img src={props.data.image} alt='dead' />
      </div>
    </Styleddiv>
  );
}
