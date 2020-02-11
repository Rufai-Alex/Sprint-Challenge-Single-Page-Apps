import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import Styled from "styled-components";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);
  const [matchCharacter, setMatchCharacter] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
        setFilterCharacter(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    search(matchCharacter);
  }, [matchCharacter]);
  function changeHandler(event) {
    setMatchCharacter(event.target.value);
  }
  function search(matchCharacter) {
    const result = character.filter(card =>
      card.name.toLowerCase().includes(matchCharacter.toLowerCase())
    );
    setFilterCharacter(result);
  }
  return (
    <section className='character-list'>
      <SearchForm changeHandler={changeHandler} />
      <h2>
        {filterCharacter.map(card => {
          return <CharacterCard key={card.id} data={card} />;
        })}
      </h2>
    </section>
  );
}

export default CharacterList;
