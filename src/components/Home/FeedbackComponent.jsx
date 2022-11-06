import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ArrowUp, CommentsIcon } from 'svg';

const FeedbackComponent = (props) => {
  const categories = useSelector((state) => state.category.items);
  const category = categories.find(
    (item) => item.id === props.feedback.category_id
  );
  const navigate = useNavigate();

  const navigateFeedback = () => {
    navigate('/feedbacks/' + props.feedback.id);
  };

  const voteBox = (
    <div
      id='vote-box'
      className='bg-lightGray flex py-2 px-4 rounded-cardBorderRadius items-center gap-x-2 md:flex-col md:gap-y-2 md:px-2 md:py-3 md:mr-10'
    >
      <ArrowUp />
      <span className='text-darkBlueTwo jost-b-h4'>
        {props.feedback.upvotes}
      </span>
    </div>
  );

  const commentsBox = (
    <div
      id='comment-box'
      className='flex items-center gap-x-1 cursor-pointer'
      onClick={navigateFeedback}
    >
      <CommentsIcon />
      <span className='text-darkBlueTwo jost-b-h4'>
        {props.feedback.commentAmount}
      </span>
    </div>
  );

  return (
    <div className='p-6 bg-white rounded-cardBorderRadius md:flex'>
      <div className='hidden md:block'>{voteBox}</div>
      <div id='info-box' className=''>
        <span className='text-darkBlueTwo jost-b-h4 md:jost-b-h3'>
          {props.feedback.title}
        </span>
        <p className='text-gray jost-r-h3 md:jost-r-h2'>
          {props.feedback.description}
        </p>
        <div className='py-1 px-4 bg-lightGray rounded-cardBorderRadius text-electric jost-b-h4 mt-2 w-fit md:mt-3 md:jost-b-h3'>
          {category.name}
        </div>
      </div>
      <div className='w-full mt-4 flex justify-between items-center md:hidden'>
        {voteBox}
        {commentsBox}
      </div>
      <div className='hidden md:block ml-auto my-auto '>{commentsBox}</div>
    </div>
  );
};

export default FeedbackComponent;
