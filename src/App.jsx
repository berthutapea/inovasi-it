import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
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

const Home = lazy(() => import('./pages/Home'));
const Seminar = lazy(() => import('./pages/Seminar'));

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/repair" element={<Repair />} />
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
