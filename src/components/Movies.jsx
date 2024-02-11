import { useRef } from 'react';
import {
  useNavigate,
  useSearchParams,
  Link,
  useLocation,
} from 'react-router-dom';
import useFilms from 'hooks/useFilms';

export default function Movies() {
  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { filmData } = useFilms(
    `search/movie?query=${query}&include_adult=false&`
  );

  const films = filmData.results;

  const handleSubmit = evt => {
    const form = evt.currentTarget;
    evt.preventDefault();
    navigate(`?query=${inputRef.current.value}`);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search movies" ref={inputRef}></input>
        <button type="submit">Search</button>
      </form>
      {films?.map(
        film =>
          query && (
            <p key={film.id}>
              <Link to={`${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </p>
          )
      )}
    </div>
  );
}
