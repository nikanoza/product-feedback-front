import { Header } from 'components/Feedback';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSingleFeedback } from 'store';
import { fetchUsers } from 'store';

const Feedback = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchSingleFeedback(id));
  }, [dispatch, id]);
  return (
    <div className='w-full min-h-full bg-extraLightGray p-6'>
      <Header />
    </div>
  );
};

export default Feedback;
