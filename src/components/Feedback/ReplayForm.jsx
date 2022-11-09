import { Button } from 'components';
import { useState } from 'react';
import { useParams } from 'react-router';

const ReplayForm = (props) => {
  const [replayContent, setReplayContent] = useState('');
  const params = useParams();
  const feedbackId = params['id'];

  const commentHandler = (event) => {
    setReplayContent(event.target.value);
  };
  const onAddReplay = () => {
    if (replayContent.trim().length > 3) {
    }
  };
  return (
    <div className='w-full flex justify-between flex-col'>
      <textarea
        className='resize-none w-full h-20 rounded-cardBorderRadius bg-extraLightGray mt-6 p-4 jost-r-h3 outline-electric outline-1'
        placeholder='Type your replay here'
        onChange={commentHandler}
        value={replayContent}
      ></textarea>
      <Button
        className='px-4 py-3 bg-violet text-white jost-b-h4 rounded-cardBorderRadius mt-2'
        type='button'
        onClick={onAddReplay}
      >
        Post Reply
      </Button>
    </div>
  );
};

export default ReplayForm;
