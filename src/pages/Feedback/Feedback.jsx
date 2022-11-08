import { FeedbackComponent } from 'components';
import { Comment, Header } from 'components/Feedback';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCategories } from 'store';
import { fetchSingleFeedback } from 'store';
import { fetchUsers } from 'store';

const Feedback = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.singleFeedback.feedback);
  const categories = useSelector((state) => state.category.items);

  useEffect(() => {
    if (categories.length === 0) dispatch(fetchCategories());
  }, [dispatch, categories.length]);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchSingleFeedback(id));
  }, [dispatch, id]);
  return (
    <div className='w-full min-h-full bg-extraLightGray p-6 pb-20'>
      <Header />
      {feedback.id ? <FeedbackComponent feedback={feedback} /> : null}
      {feedback.id ? (
        <div className='w-full p-6 bg-white mt-6 rounded-cardBorderRadius'>
          <span className='text-darkBlueTwo jost-b-h3'>
            {feedback.commentAmount} Comments
          </span>
          {feedback.comments.map((comment, index) => (
            <Comment key={comment.id} index={index} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Feedback;
