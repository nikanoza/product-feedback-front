import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'svg';

const Header = () => {
  const location = useLocation();
  return (
    <header className='w-full h-24 px-6 flex justify-between items-center bg-darkBlue md:rounded-cardBorderRadius'>
      <div>
        <Link to={'/'} className='flex gap-x-3 items-center'>
          <ArrowLeft color='#CDD2EE' />
          <span className='jost-b-h4 text-white'>Go Back</span>
        </Link>
        <span className='text-white jost-b-h3 md:jost-b-h1'>Roadmap</span>
      </div>
      <Link
        className='px-4 py-3 text-white jost-b-h4 bg-violet hover:bg-violetHover whitespace-nowrap rounded-cardBorderRadius ml-auto'
        id='add-feedback-btn'
        to={'/feedbacks/new'}
        state={{ from: location }}
      >
        + Add Feedback
      </Link>
    </header>
  );
};

export default Header;
