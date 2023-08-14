import React from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home'
import Blog from './components/Blog'
import Article from './components/Article'
import NotFound from './components/NotFound'

import articlesData from './components/data/articles.json';

const App = () => {
  return (
    <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          {articlesData.map(article => (
            <Route
              exact path={`/blog/${article.slug}`}
              element={<Article content={article.content} />}/>
          ))}
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;