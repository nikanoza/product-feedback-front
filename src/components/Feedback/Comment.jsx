import { Button } from 'components/shared';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Replay, ReplayForm } from '.';

const Comment = (props) => {
  const [replayForm, setReplayForm] = useState(false);
  const comments = useSelector(
    (state) => state.singleFeedback.feedback.comments
  );
  const users = useSelector((state) => state.users.users);
  const comment = comments[props.index];
  const user = users.find((human) => human.id === comment.userId);
  const onReplay = () => {
    setReplayForm(!replayForm);
  };

  return (
    <div className='w-full mt-6'>
      <div className='w-full flex items-center'>
        <img
          src={process.env.REACT_APP_API_URL + user.avatar}
          alt=''
          className='w-10 h-10 rounded-full'
        />
        <div id='user-info' className='ml-4 flex flex-col'>
          <span className='text-darkBlueTwo jost-b-h4'>{user.name}</span>
          <span className='text-gray jost-r-h3'>@{user.username}</span>
        </div>
        <Button
          id={'replay-btn' + comment.id}
          type='button'
          className='text-electric jost-b-h4 ml-auto'
          onClick={onReplay}
        >
          Replay
        </Button>
      </div>
      <p className='w-full text-gray jost-r-h3 mt-6'>{comment.content}</p>
      {replayForm ? <ReplayForm commentId={comment.id} /> : null}
      {comment.replies.length > 0 ? (
        <div className='w-full border-l-gray border-l-[1px] border-opacity-10 pl-6 mt-6 flex flex-col gap-y-6'>
          {comment.replies.map((replay) => (
            <Replay replay={replay} key={replay.id} />
          ))}
        </div>
      ) : null}
      {props.index < comments.length - 1 ? (
        <div className='h-[1px] mt-6 bg-[#8C92B3] opacity-25'></div>
      ) : null}
    </div>
  );
};

export default Comment;
