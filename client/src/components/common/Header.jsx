import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">TeamNote</h1>
      
      <div className="header__actions">
        <button className="header__btn header__btn--ai">
          현재 페이지 AI 요약 ✨
        </button>
        <button className="header__btn header__btn--ai">
          전체 AI 요약 ✨
        </button>
        <button className="header__btn header__btn--copy">
          링크 복사 📋
        </button>
        
        <div className="header__avatars">
          <div className="header__avatar header__avatar--1"></div>
          <div className="header__avatar header__avatar--2"></div>
          <div className="header__avatar header__avatar--3"></div>
          <div className="header__avatar header__avatar--4"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;