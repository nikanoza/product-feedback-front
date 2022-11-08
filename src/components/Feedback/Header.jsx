import { Button } from 'components/shared';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'svg';

const Header = () => {
  const navigate = useNavigate();
  const backMain = () => {
    navigate('/');
  };
  return (
    <div className='w-full flex justify-between items-center'>
      <Link to={'/'} className='flex gap-x-4 items-center'>
        <ArrowLeft color='#4661E6' />
        <span className='jost-b-h4 text-gray'>Go Back</span>
      </Link>
      <Button
        id='edit-btn'
        type='button'
        className='px-4 py-3 rounded-cardBorderRadius bg-electric text-lightGray jost-b-h4'
        onClick={backMain}
      >
        Edit Feedback
      </Button>
    </div>
  );
};

export default Header;
