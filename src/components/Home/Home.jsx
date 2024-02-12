import { useLocation } from 'react-router-dom';
import useFilms from 'hooks/useFilms';
import { FilmLink } from './HomeStyles';

export default function Home() {
  const { filmData } = useFilms('trending/all/day?');
  const location = useLocation();
  const films = filmData.results;
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films?.map(film => (
          <li key={film.id}>
            <FilmLink to={`movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </FilmLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
