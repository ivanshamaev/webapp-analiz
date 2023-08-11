import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Content';
import AnalizForm from './components/AnalizForm';
import InfoBlock from './components/InfoBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <AnalizForm />
      <InfoBlock />
      <Footer />
    </div>
  );
}

export default App;