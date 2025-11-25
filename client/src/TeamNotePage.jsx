import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import CommentSidebar from './Components/CommentSidebar';
import './TeamNotePage.css';

const TeamNotePage = () => {
  const [activePage, setActivePage] = useState('links');

  const [pages] = useState([
    { id: 'page1', name: 'PAGE 1', icon: null },
    { id: 'page2', name: 'PAGE 2', icon: null },
    { id: 'links', name: 'Links', icon: '🔗' },
  ]);

  const [links, setLinks] = useState([
    {
      id: 1,
      url: 'https://www.youtube.com/',
      description: '유튜브 링크',
      createdAt: new Date('2025-11-01T20:03:00'),
    },
    {
      id: 2,
      url: 'https://www.youtube.com/',
      description: '유튜브 링크',
      createdAt: new Date('2025-11-01T20:03:00'),
    },
  ]);

  const [comments] = useState([
    {
      id: 1,
      page: 'PAGE 1',
      date: '2025년 11월 1일  20:03',
      content: '여기 ppt 내용 변경 요청합니다. 과학 관련 내용에 오류가 있습니다. 재검토 해주시면 감사드...',
    },
    {
      id: 2,
      page: 'PAGE 2',
      date: '2025년 11월 1일  13:37',
      content: '여기 ppt 내용 변경 요청합니다. 과학 관련 내용에 오류가 있습니다. 재검토 해주시면 감사드...',
    },
    {
      id: 3,
      page: 'PAGE 3',
      date: '2025년 10월 31일  23:03',
      content: 'ppt 플로우 적었습니다.',
    },
  ]);

  // 링크 추가 핸들러 - DB 연동 시 이 함수에 API 호출 추가
  const handleAddLink = (newLink) => {
    const link = {
      id: Date.now(),
      url: newLink.url,
      description: newLink.description,
      createdAt: new Date(),
    };
    setLinks([link, ...links]);
    
    // TODO: DB에 저장하는 코드 작성
    // await api.saveLink(link);
  };

  return (
    <div className="teamnote-page">
      <Header />
      
      <div className="teamnote-page__body">
        <Sidebar
          pages={pages}
          activePage={activePage}
          onPageClick={setActivePage}
        />
        
        <MainContent 
          links={links} 
          onAddLink={handleAddLink} 
        />
        
        <CommentSidebar comments={comments} />
      </div>
    </div>
  );
};

export default TeamNotePage;