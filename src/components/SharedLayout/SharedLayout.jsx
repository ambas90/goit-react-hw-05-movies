import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppWrapper, HeaderLink } from './SharedLayoutStyles';

export default function SharedLayout() {
  return (
    <AppWrapper>
      <header>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </AppWrapper>
  );
}
