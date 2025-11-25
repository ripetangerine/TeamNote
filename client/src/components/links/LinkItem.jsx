import React from 'react';
import './LinkItem.css';

const LinkItem = ({ link }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${year}년 ${month}월 ${day}일  ${hours}:${minutes}`;
  };

  return (
    <div className="link-item">
      <div className="link-item__avatar">
        <span>👤</span>
      </div>
      
      <div className="link-item__content">
        <p className="link-item__date">{formatDate(link.createdAt)}</p>
        <a 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-item__url"
        >
          {link.url}
        </a>
        <p className="link-item__description">{link.description}</p>
      </div>
      
      <div className="link-item__actions">
        <button className="link-item__btn">🗑️</button>
        <button className="link-item__btn">✏️</button>
      </div>
    </div>
  );
};

export default LinkItem;