import { Feedback, Feedbacks, Header } from 'components/Roadmap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatuses } from 'store';
import { fetchFeedbacks } from 'store';

const Roadmap = () => {
  const [filterStatus, setFilterStatus] = useState(2);

  const feedbacks = useSelector((state) => state.feedbacks.items);
  const statuses = useSelector((state) => state.statuses.items);
  const dispatch = useDispatch();

  const planed = feedbacks.filter((feedback) => feedback.status_id === 2);
  const inProgress = feedbacks.filter((feedback) => feedback.status_id === 3);
  const live = feedbacks.filter((feedback) => feedback.status_id === 4);

  const feedbacksArray =
    filterStatus === 2 ? planed : filterStatus === 3 ? inProgress : live;

  useEffect(() => {
    if (feedbacks.length === 0) {
      dispatch(fetchFeedbacks());
    }
  }, [feedbacks.length, dispatch]);

  useEffect(() => {
    if (statuses.length === 0) {
      dispatch(fetchStatuses());
    }
  }, [dispatch, statuses.length]);

  return (
    <div className='w-full min-h-full bg-extraLightGray md:pt-14 md:pb-24 md:px-10 lg:px-40 xl:flex xl:flex-col xl:items-center'>
      <Header />
      {statuses.length > 0 ? (
        <div className='w-full h-16 flex border-b-[#8C92B3] border-b-2 border-opacity-25 md:hidden'>
          <div
            className={`w-1/3 flex justify-center items-center ${
              filterStatus === 2 ? 'border-b-4' : 'border-b-0'
            }`}
            style={{ borderBottomColor: statuses[filterStatus - 1].color }}
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
            className={`w-1/3 flex justify-center items-center ${
              filterStatus === 3 ? 'border-b-4' : 'border-b-0'
            }`}
            style={{ borderBottomColor: statuses[filterStatus - 1].color }}
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
            className={`w-1/3 flex justify-center items-center ${
              filterStatus === 4 ? 'border-b-4' : 'border-b-0'
            }`}
            style={{ borderBottomColor: statuses[filterStatus - 1].color }}
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
      ) : null}
      {statuses.length > 0 ? (
        <div
          id='main-content'
          className='p-6 jost-b-h3 text-darkBlueTwo md:hidden bg-extraLightGray'
        >
          <span>
            {statuses[filterStatus - 1].name} ({feedbacksArray.length})
          </span>
          <p className='mt-1 jost-r-h3 text-gray mb-2'>
            Features currently being developed
          </p>
          {feedbacksArray.map((feedback) => (
            <Feedback
              feedback={feedback}
              status={statuses[filterStatus - 1]}
              key={feedback.id}
            />
          ))}
        </div>
      ) : null}
      {statuses.length > 0 ? (
        <Feedbacks planed={planed} inProgress={inProgress} live={live} />
      ) : null}
    </div>
  );
};

export default Roadmap;
