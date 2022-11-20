import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchCategories } from 'store';
import { ArrowUp, CommentsIcon } from 'svg';

const Feedback = (props) => {
  const categories = useSelector((state) => state.category.items);
  const category = categories.find(
    (item) => item.id === props.feedback.category_id
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateFeedback = () => {
    navigate('/feedbacks/' + props.feedback.id);
  };

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [categories.length, dispatch]);

  const voteBox = (
    <div
      id='vote-box'
      className='bg-lightGray flex py-2 px-4 rounded-cardBorderRadius items-center gap-x-2'
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
    <div
      className='rounded-cardBorderRadius bg-white border-t-[6px] p-6 pt-4 mt-4'
      style={{ borderTopColor: props.status.color }}
    >
      {categories.length > 0 ? (
        <>
          <div className='flex items-center gap-x-2'>
            <span
              className='w-2 h-2 rounded-full'
              style={{ backgroundColor: props.status.color }}
            ></span>
            <span className='jost-r-h3 text-gray'>{props.status.name}</span>
          </div>
          <h3 className='mt-4 jost-b-h4 text-darkBlueTwo'>
            {props.feedback.title}
          </h3>
          <p className='mt-2 jost-r-h3 text-gray'>
            {props.feedback.description}
          </p>
          <div className='py-1 px-4 bg-lightGray rounded-cardBorderRadius text-electric jost-b-h4 mt-2 w-fit md:mt-3 md:jost-b-h3'>
            {category.name}
          </div>
          <div className='w-full mt-4 flex justify-between items-center'>
            {voteBox}
            {commentsBox}
          </div>{' '}
        </>
      ) : null}
    </div>
  );
};

export default Feedback;
