import React from 'react';
import LinkItem from './LinkItem';
import './LinkList.css';

const LinkList = ({ links }) => {
  return (
    <div className="link-list">
      {links.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;