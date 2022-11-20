import Feedback from './Feedback';
import { useSelector } from 'react-redux';

const Feedbacks = (props) => {
  const statuses = useSelector((state) => state.statuses.items);
  return (
    <div className='mt-8 w-full justify-between hidden md:flex bg-extraLightGray lg:max-w-[1110px]'>
      <div className='w-56 2xl:w-[350px]'>
        <span className='jost-b-h3 text-darkBlueTwo'>
          Planned ({props.planed.length})
        </span>
        <p className='mt-1 jost-r-h3 text-gray mb-2'>
          Ideas prioritized for research
        </p>
        {props.planed.map((feedback) => (
          <Feedback
            feedback={feedback}
            status={statuses[1]}
            key={feedback.id}
          />
        ))}
      </div>
      <div className='w-56 2xl:w-[350px]'>
        <span className='jost-b-h3 text-darkBlueTwo'>
          In-Progress ({props.inProgress.length})
        </span>
        <p className='mt-1 jost-r-h3 text-gray mb-2'>
          Ideas prioritized for research
        </p>
        {props.inProgress.map((feedback) => (
          <Feedback
            feedback={feedback}
            status={statuses[2]}
            key={feedback.id}
          />
        ))}
      </div>
      <div className='w-56 2xl:w-[350px]'>
        <span className='jost-b-h3 text-darkBlueTwo'>
          Live ({props.live.length})
        </span>
        <p className='mt-1 jost-r-h3 text-gray mb-2'>
          Ideas prioritized for research
        </p>
        {props.live.map((feedback) => (
          <Feedback
            feedback={feedback}
            status={statuses[3]}
            key={feedback.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
