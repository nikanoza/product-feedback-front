import { Header } from 'components/Roadmap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedbacks } from 'store';

const Roadmap = () => {
  const [filterStatus, setFilterStatus] = useState(2);

  const feedbacks = useSelector((state) => state.feedbacks.items);
  const dispatch = useDispatch();

  const planed = feedbacks.filter((feedback) => feedback.status_id === 2);
  const inProgress = feedbacks.filter((feedback) => feedback.status_id === 3);
  const live = feedbacks.filter((feedback) => feedback.status_id === 4);

  useEffect(() => {
    if (feedbacks.length === 0) {
      dispatch(fetchFeedbacks());
    }
  }, [feedbacks.length, dispatch]);
  return (
    <div className='w-full h-full bg-extraLightGray'>
      <Header />
      <div className='w-full h-16 flex border-b-[#8C92B3] border-b-2 border-opacity-25'>
        <div
          className={`w-1/3 flex justify-center items-center border-b-violet ${
            filterStatus === 2 ? 'border-b-4' : 'border-b-0'
          }`}
        >
          <span
            className={`text-darkBlueTwo jost-b-h4 ${
              filterStatus === 2 ? 'opacity-100' : 'opacity-40'
            }`}
            onClick={() => setFilterStatus(2)}
          >
            Planned ({planed.length})
          </span>
        </div>
        <div
          className={`w-1/3 flex justify-center items-center border-b-violet ${
            filterStatus === 3 ? 'border-b-4' : 'border-b-0'
          }`}
        >
          <span
            className={`text-darkBlueTwo jost-b-h4 ${
              filterStatus === 3 ? 'opacity-100' : 'opacity-40'
            }`}
            onClick={() => setFilterStatus(3)}
          >
            In-Progress ({inProgress.length})
          </span>
        </div>
        <div
          className={`w-1/3 flex justify-center items-center border-b-violet ${
            filterStatus === 4 ? 'border-b-4' : 'border-b-0'
          }`}
        >
          <span
            className={`text-darkBlueTwo jost-b-h4 ${
              filterStatus === 4 ? 'opacity-100' : 'opacity-40'
            }`}
            onClick={() => setFilterStatus(4)}
          >
            Live ({live.length})
          </span>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
