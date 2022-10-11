import { RoadmapPanel } from '.';
import ButtonsControl from './ButtonsControl';

const Menu = () => {
  return (
    <div className='w-3/4 bg-extraLightGray right-0 h-full p-6 ml-auto -mr-6 md:w-max md:h-44 md:mr-0 md:flex md:p-0 md:px-2 md:justify-between'>
      <ButtonsControl />
      <RoadmapPanel />
    </div>
  );
};

export default Menu;
