import { useNavigate, useParams, NavLink, Outlet } from 'react-router-dom';
import useFilms from 'hooks/useFilms';

export default function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { filmData } = useFilms(`movie/${movieId}`);
  const handleGoBack = () => {
    navigate('/');
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
      <NavLink to="Cast">Cast</NavLink>
      <NavLink to="Reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
}
