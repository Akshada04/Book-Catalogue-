import React from 'react';
import './App.css';
import Header from './components/Header/appHeader';
import MainRoutes from './Routes/MainRoutes';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <article>
        <MainRoutes />
      </article>
      <Footer />
    </div>
  );
}


export default App;
