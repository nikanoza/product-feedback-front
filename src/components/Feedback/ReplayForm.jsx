import { Button } from 'components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addReplay } from 'services';
import { singleFeedbackActions } from 'store';

const ReplayForm = (props) => {
  const [replayContent, setReplayContent] = useState('');
  const params = useParams();
  const dispatch = useDispatch();
  const feedbackId = params['id'];

  const commentHandler = (event) => {
    setReplayContent(event.target.value);
  };
  const onAddReplay = async () => {
    if (replayContent.trim().length > 3) {
      const replayObj = {
        content: replayContent,
        replyingTo: props.replayTo,
        feedbackId: feedbackId,
        userId: 1,
        commentId: props.commentId,
      };
      try {
        const response = await addReplay(replayObj);
        const newReplay = response.data;
        props.setReplayForm(false);
        setReplayContent('');
        dispatch(singleFeedbackActions.addReplay(newReplay));
      } catch (error) {}
    }
  };
  return (
    <div className='w-full flex justify-between flex-col md:pl-4 md:flex-row md:gap-x-4 md:mt-4'>
      <textarea
        className='resize-none w-full h-20 rounded-cardBorderRadius bg-extraLightGray mt-6 p-4 jost-r-h3 outline-electric outline-1 md:mt-0'
        placeholder='Type your replay here'
        onChange={commentHandler}
        value={replayContent}
      ></textarea>
      <Button
        className='px-4 py-3 bg-violet text-white jost-b-h4 rounded-cardBorderRadius mt-2 md:px-0 md:h-11 md:w-28'
        type='button'
        onClick={onAddReplay}
      >
        Post Reply
      </Button>
    </div>
  );
};

export default ReplayForm;
