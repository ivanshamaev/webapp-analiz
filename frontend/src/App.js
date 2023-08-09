import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Content';
import AnalizForm from './components/AnalizForm';

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <AnalizForm />
    </div>
  );
}

export default App;