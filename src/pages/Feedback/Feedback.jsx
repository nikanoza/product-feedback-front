import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'store';

const Feedback = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return <div>Feedback page</div>;
};

export default Feedback;
