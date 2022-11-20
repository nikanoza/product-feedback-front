import { Button } from 'components/shared';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'svg';

const Header = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const backMain = () => {
    navigate('/feedbacks-edit/' + id);
  };
  return (
    <div className='w-full flex justify-between items-center mb-6'>
      <Link
        to={location ? location.state.from : '/'}
        className='flex gap-x-4 items-center'
      >
        <ArrowLeft color='#4661E6' />
        <span className='jost-b-h4 text-gray hover:underline'>Go Back</span>
      </Link>
      <Button
        id='edit-btn'
        type='button'
        className='px-4 py-3 rounded-cardBorderRadius bg-electric hover:bg-electricHover text-lightGray jost-b-h4'
        onClick={backMain}
      >
        Edit Feedback
      </Button>
    </div>
  );
};

export default Header;
