import { Link, useLocation } from "react-router-dom";
import Item from "./Item";

export default function About() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      About
      <Item />
      <Link to={location.state?.prev}>BACK</Link>
    </div>
  );
}
