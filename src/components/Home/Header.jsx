import { Hamburger } from 'svg';
import Menu from './Menu';

const Header = () => {
  return (
    <header className='w-full h-18 bg-headerGradient flex justify-between px-6 items-center relative'>
      <div id='title-box' className='text-white'>
        <h3 className='jost-b-h4'>Frontend Mentor</h3>
        <h2 className='jost-r-h3 opacity-75'>Feedback Board</h2>
      </div>
      <Hamburger />
      <Menu />
    </header>
  );
};

export default Header;
