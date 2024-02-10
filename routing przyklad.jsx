import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from 'react-router-dom';
//https://rickandmortyapi.com/api/character
function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Item() {
  const { id } = useParams();
  console.log(id);
  return <div>Item - {id}</div>;
}

function NotFound() {
  return <div>404</div>;
}

function CharactersList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios.get(
        'https://rickandmortyapi.com/api/character'
      );
      console.log(data.results);
      setList(data.results);
    };
    getCharacters();
  }, []);
  return (
    <div>
      CharactersList:
      {list.map(char => (
        <Link to={`/characters/${char.id}`} key={char.id}>
          <p>
            {char.name} - {char.id}
          </p>
        </Link>
      ))}
    </div>
  );
}
function Character() {
  const { charId } = useParams();
  const [char, setChar] = useState(null);
  useEffect(() => {
    const getCharacter = async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${charId}`
      );
      console.log(data);
      setChar(data);
    };
    getCharacter();
  }, []);
  return (
    <div>
      CharactersList - {charId} <p>{char?.name}</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/item">Item</NavLink>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/characters/:charId" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
