import React from 'react';
import {
  Banner,
  Header,
  Navigation,
  About,
  Services,
  Work,
  Contact,
} from './components';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Navigation />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]' /> */}
    </div>
  );
}

export default App;
