import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;