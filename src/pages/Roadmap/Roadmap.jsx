import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedbacks } from 'store';

const Roadmap = () => {
  const feedbacks = useSelector((state) => state.feedbacks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (feedbacks.length === 0) {
      dispatch(fetchFeedbacks());
    }
  }, [feedbacks.length, dispatch]);
  return <div className='w-full h-full bg-extraLightGray'>Roadmap page</div>;
};

export default Roadmap;
