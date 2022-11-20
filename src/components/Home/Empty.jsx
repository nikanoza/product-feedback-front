import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Sherlock } from 'svg';

const Empty = () => {
  const location = useLocation();
  return (
    <div className='w-full h-[480px] bg-white rounded-cardBorderRadius flex flex-col justify-center items-center px-6 md:px-36'>
      <Sherlock />
      <span className='mt-10 jost-b-h3 text-darkBlueTwo'>
        There is no feedback yet.
      </span>
      <p className='mt-3 text-gray jost-r-h3 text-center'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Link
        className='mt-6 px-4 py-3 text-white jost-b-h4 bg-violet hover:bg-violetHover whitespace-nowrap rounded-cardBorderRadius'
        id='add-feedback-btn'
        to={'/feedbacks/new'}
        state={{ from: location }}
      >
        + Add Feedback
      </Link>
    </div>
  );
};

export default Empty;
