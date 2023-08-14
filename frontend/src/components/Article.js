import React from 'react';
import ReactMarkdown from 'react-markdown';

const Article = ({ content }) => {
  return (
    <div className="container mt-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Article;