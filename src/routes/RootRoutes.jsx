import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Preloader from '../components/UIElements/Preloader/Preloader';
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
import ModalBlogCard from '../scenes/Blogs/ModalBlogCard';

export const routes = {
  Home: '/',
  About: '/about',
  Projects: '/projects',
  Project: '/project/:id',
  Resume: '/resume',
  Blogs: '/Blogs',
  Blog: '/Blog/:id'
};

const scenes = {
  Home: lazy(() => import('../scenes/Home/Home')),
  About: lazy(() => import('../scenes/About/About')),
  Projects: lazy(() => import('../scenes/Projects/Projects')),
  Resume: lazy(() => import('../scenes/Resume/Resume')),
  Blogs: lazy(()=> import('../scenes/Blogs/Blogs'))
};

function LazyScene({ name }) {
  const Scene = scenes[name];
  return (
    <Suspense fallback={<Preloader />}>
      <Scene />
    </Suspense>
  );
}

function RootRoutes() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route
          path={routes.Home}
          element={<LazyScene name="Home" />}
        />
        <Route
          path={routes.About}
          element={<LazyScene name="About" />}
        />
        <Route
          path={routes.Projects}
          element={<LazyScene name="Projects" />}
        />
        <Route
          path={routes.Resume}
          element={<LazyScene name="Resume" />}
        />
        <Route
          path={routes.Blogs}
          element={<LazyScene name="Blogs" />}
        />
        <Route
          /*Modal*/ path={routes.Project}
          element={<ModalProjectCard />}
        />
        <Route
          /*Modal*/ path={routes.Blog}
          element={<ModalBlogCard />}
        />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={routes.Project}
            element={<ModalProjectCard />}
          />
          <Route
            path={routes.Blog}
            element={<ModalBlogCard />}
          />
        </Routes>
      )}
    </>
  );
}

export default RootRoutes;
