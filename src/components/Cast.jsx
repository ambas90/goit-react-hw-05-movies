import { useParams } from 'react-router-dom';
import useFilms from 'hooks/useFilms';

export default function Cast() {
  const { movieId } = useParams();
  const { filmData } = useFilms(`movie/${movieId}/credits?`);

  return (
    <div>
      <ul>
        {filmData.cast?.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt=""
            />
            <h3>{actor.name}</h3>
            <p>character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
