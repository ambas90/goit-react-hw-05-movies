import axios from 'axios';
import { useEffect, useState } from 'react';

const apiKey = 'api_key=29926744d88f87de2894846856dc31dc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const useFilms = query => {
  const [filmData, setFilmList] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);
  const [error, setError] = useState([false]);

  useEffect(() => {
    const getFilms = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`${query}${apiKey}`);
      setFilmList(data);
      setIsLoading(false);
      console.log(data);
    };
    getFilms().catch(error => {
      setError(true);
      setIsLoading(false);
    });
  }, [query]);

  return { filmData, isLoading, error };
};

export default useFilms;
