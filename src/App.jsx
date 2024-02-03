import React from 'react';
import {
  Banner,
  Header,
  Navigation,
  About,
  Events,
  Sponsor,
  Contact,
} from './components';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Navigation />
      <About />
      <Events />
      <Sponsor />
      <Contact />
      <div className="h-[4000px]" />
    </div>
  );
}

export default App;
