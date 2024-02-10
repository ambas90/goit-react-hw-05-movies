import { useLocation, useSearchParams } from "react-router-dom";
import usePagination from "../hooks/usePagination";
import useCharacters from "../hooks/useCharacters";
import Item from "./Item";

export default function Characters() {
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("name"));
  const [activePage, handlePrevious, handleNext] = usePagination();
  const { charactersList } = useCharacters(activePage);
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {charactersList.map((char) => (
        <p key={char.id}>{char.name}</p>
      ))}
      <Item />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
