import { useLocation } from "react-router-dom";

export default function Item() {
  const location = useLocation();
  const isOnCharacters = location.pathname.includes("/characters");
  return (
    <div>
      EVERYWHERE
      {isOnCharacters && <p>Only on characters</p>}
    </div>
  );
}
