import React from 'react';
import LinkForm from './LinkForm';
import LinkList from './LinkList';
import './MainContent.css';

const MainContent = ({ links, onAddLink }) => {
  return (
    <main className="main-content">
      <LinkForm onAddLink={onAddLink} />
      <LinkList links={links} />
    </main>
  );
};

export default MainContent;