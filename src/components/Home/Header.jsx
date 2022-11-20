import { useRef, useState } from 'react';
import { Close, Hamburger } from 'svg';
import { RoadmapPanel } from '.';
import { ButtonsControl } from '.';
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
    <header className='w-full h-18 bg-headerGradient flex justify-between px-6 items-center relative md:bg-none md:px-10 md:bg-extraLightGray md:h-auto md:w-auto lg:flex-col lg:justify-start lg:px-0 lg:gap-y-6'>
      <div
        id='title-box'
        className='text-white md:bg-headerGradient md:w-56 md:h-44 md:rounded-cardBorderRadius p-6 md:flex md:flex-col lg:w-64 lg:h-32'
      >
        <h3 className='jost-b-h4 md:mt-auto md:jost-b-h2'>Frontend Mentor</h3>
        <h2 className='jost-r-h3 opacity-75 md:jost-r-h2'>Feedback Board</h2>
      </div>
      <div className='md:hidden'>
        {menuStatus ? (
          <Close onClick={closeMenu} />
        ) : (
          <Hamburger onClick={openMenu} />
        )}
      </div>
      <div className='hidden md:flex'>
        <ButtonsControl
          setByCategory={props.setByCategory}
          byCategory={props.byCategory}
        />
      </div>
      <div className='hidden md:flex'>
        <RoadmapPanel />
      </div>
      {menuStatus && (
        <div
          className='w-full h-149 absolute top-18 -left-6 bg-black bg-opacity-50 md:hidden'
          ref={backdropRef}
          onClick={checkHandler}
        >
          <Menu
            setByCategory={props.setByCategory}
            byCategory={props.byCategory}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
