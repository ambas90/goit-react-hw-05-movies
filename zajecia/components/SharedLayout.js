import { Suspense } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function SharedLayout() {
  const location = useLocation();
  const prev = location.pathname + location.search;

  return (
    <>
      <h1>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink state={{ prev }} to="/about">
            About
          </NavLink>
          <NavLink state={{ prev }} to="/characters">
            Characters
          </NavLink>
        </header>
        <br />
      </h1>
      <div>
        <Suspense fallback={<p>loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
