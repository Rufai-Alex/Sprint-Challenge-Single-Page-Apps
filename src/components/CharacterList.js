import React, { useEffect, useState } from "react";
import axios from "axios";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setCharacters(response.data.results);
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getCharacters();
  }, []);
  console.log(characters);

  return (
    <section className='character-list'>
      <div>
        {characters.map(character => {
          return (
            <div key={character.id}>
              <img scr={character.image} />
              <h2>Name :{character.name}</h2>
              <p> Status :{character.status} </p>
              <p>Species :{character.species}</p>
              const names = {character.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CharacterList;
