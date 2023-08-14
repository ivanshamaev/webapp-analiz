import React from 'react';
import { Link } from 'react-router-dom';
import articlesData from './data/articles.json';

const Blog = () => {
  return (
    <div className="container mt-4">
      <h2>Blog</h2>
      {articlesData.map(article => (
        <div key={article.id}>
          <h3>
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <p>Category: {article.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;