import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  Navigation,
  Header,
  NotFound,
  Loader,
  ScrollToTop,
  Footer,
  Repair,
} from './components';
import BgSite from './assets/images/site-bg.jpg';

import Home from "./pages/Home/index"
import Seminar from "./pages/Seminar/index"

// const Home = lazy(() => import('./pages/Home'));
// const Seminar = lazy(() => import('./pages/Seminar'));

function App() {
  return (
    <div
      className="bg-site bg-no-repeat bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${BgSite})` }}
    >
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}

function HomeLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  return (
    <>
      <Header />
      <Navigation />
      <Home />
      <Footer />
    </>
  );
}

export default App;
