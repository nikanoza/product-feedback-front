import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSingleFeedback } from 'store';
import { fetchUsers } from 'store';

const Feedback = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const feedback = useSelector((state) => state.singleFeedback.feedback);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchSingleFeedback(id));
  }, [dispatch, id]);
  return <div>Feedback page</div>;
};

export default Feedback;
