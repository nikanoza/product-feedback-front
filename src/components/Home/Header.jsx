import { useRef, useState } from 'react';
import { Close, Hamburger } from 'svg';
import Menu from './Menu';

const Header = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const backdropRef = useRef();

  const openMenu = () => {
    setMenuStatus(true);
  };

  const closeMenu = () => {
    setMenuStatus(false);
  };
  const checkHandler = (event) => {
    if (event.target === backdropRef.current) closeMenu();
  };
  return (
    <header className='w-full h-18 bg-headerGradient flex justify-between px-6 items-center relative'>
      <div id='title-box' className='text-white'>
        <h3 className='jost-b-h4'>Frontend Mentor</h3>
        <h2 className='jost-r-h3 opacity-75'>Feedback Board</h2>
      </div>
      {menuStatus ? (
        <Close onClick={closeMenu} />
      ) : (
        <Hamburger onClick={openMenu} />
      )}
      {menuStatus && <Menu backdropRef={backdropRef} onClick={checkHandler} />}
    </header>
  );
};

export default Header;
