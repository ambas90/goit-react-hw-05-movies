import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/character/";
const useCharacters = (activePage) => {
  const [charactersList, setCharactersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`?page=${activePage}`);
      console.log(data);
      setCharactersList(data.results);
      setIsLoading(false);
    };
    getCharacters().catch((err) => {
      setError(true);
      setIsLoading(false);
    });
  }, [activePage]);

  return { charactersList, isLoading, error };
};

export default useCharacters;
