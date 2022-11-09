import { Button } from 'components/shared';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from 'services';
import { singleFeedbackActions } from 'store';

const limit = 250;

const NewComment = (props) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const commentHandler = (event) => {
    if (event.target.value.length <= limit) setComment(event.target.value);
  };
  const backspace = (event) => {
    const str = event.target.value.slice(0, comment.length);

    if (event.target.value.length === limit && event.key === 'Backspace') {
      setComment(str);
    }
  };

  const onAddComment = async () => {
    if (comment.trim().length > 3) {
      const commentObj = {
        content: comment,
        feedbackId: +props.feedbackId,
        userId: 1,
      };
      try {
        const response = await addComment(commentObj);
        const newComment = response.data;
        newComment.replies = [];
        dispatch(singleFeedbackActions.addComment(newComment));
        setComment('');
      } catch (error) {}
    }
  };
  return (
    <div className=' w-full rounded-cardBorderRadius p-6 bg-white mt-6'>
      <span className='text-darkBlueTwo jost-b-h3'>Add Comment</span>
      <textarea
        className='resize-none w-full h-20 rounded-cardBorderRadius bg-extraLightGray mt-6 p-4 jost-r-h3 outline-electric outline-1'
        placeholder='Type your comment here'
        value={comment}
        onChange={commentHandler}
        onKeyDown={backspace}
      ></textarea>
      <div
        id='new-comment-bottom'
        className='flex justify-between items-center mt-6'
      >
        <span className=' text-gray jost-r-h3'>
          {limit - comment.length} Characters left
        </span>
        <Button
          id='post-comment-btn'
          className='px-4 py-3 bg-violet text-white jost-b-h4 rounded-cardBorderRadius'
          type='button'
          onClick={onAddComment}
        >
          Post Comment
        </Button>
      </div>
    </div>
  );
};

export default NewComment;
