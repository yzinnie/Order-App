import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const navigate = useNavigate();

  return (
    <div className="Header">
      <img
        src={process.env.PUBLIC_URL + `assets/icon-header.png`}
        onClick={() => navigate('/main')}
        alt="iconHeader"
      />
      <img
        className="menu-icon"
        src={process.env.PUBLIC_URL + `assets/icon-menu.png`}
        alt="iconMenu"
        onClick={() => toggleMenu()}
      />
      <div className="menu">
        <ul className={isOpen ? 'navLinks showNav' : 'hidden'}>
          <li onClick={() => navigate('/info')}>산 check?</li>
          <li onClick={() => navigate('/checkList')}>체크리스트</li>
          <li onClick={() => navigate('/news')}>반려동물을 검색했어요</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//<img src={process.env.PUBLIC_URL + `assets/icon-menu.png`} />
