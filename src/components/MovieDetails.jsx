import {
  useNavigate,
  useParams,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import useFilms from 'hooks/useFilms';

export default function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { filmData } = useFilms(`movie/${movieId}?`);

  const handleClick = evt => {
    navigate(evt.target.value);
  };

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/');
  };

  console.log(filmData);
  const { title, release_date, overview, genres, vote_average, poster_path } =
    filmData;
  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
      <h2>
        {title} {release_date?.slice(0, 4)}
      </h2>
      <p>User score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres?.map(gen => (
        <span key={gen.id}>{gen.name} </span>
      ))}
      <p>Additional information</p>

      <button value="Cast" onClick={handleClick}>
        Cast
      </button>
      <button value="Reviews" onClick={handleClick}>
        Reviews
      </button>
      <Outlet />
    </div>
  );
}
