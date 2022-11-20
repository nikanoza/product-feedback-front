import { Button } from 'components/shared';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReplayForm } from '.';

const Replay = (props) => {
  const [replayForm, setReplayForm] = useState(false);
  const users = useSelector((state) => state.users.users);
  const user = users.find((human) => human.id === props.replay.userId);

  const onReplay = () => {
    setReplayForm(!replayForm);
  };
  return (
    <div className='w-full md:flex'>
      <img
        src={process.env.REACT_APP_API_URL + user.avatar}
        alt=''
        className='w-10 h-10 rounded-full hidden md:block'
      />
      <div className='w-full'>
        <div className='w-full flex items-center'>
          <img
            src={process.env.REACT_APP_API_URL + user.avatar}
            alt=''
            className='w-10 h-10 rounded-full md:hidden'
          />
          <div id='user-info' className='ml-4 flex flex-col'>
            <span className='text-darkBlueTwo jost-b-h4'>{user.name}</span>
            <span className='text-gray jost-r-h3'>@{user.username}</span>
          </div>
          <Button
            id={'replay-btn' + props.replay.id}
            type='button'
            className='text-electric hover:underline jost-b-h4 ml-auto'
            onClick={onReplay}
          >
            Replay
          </Button>
        </div>
        <p className='w-full text-gray jost-r-h3 mt-6 md:ml-4'>
          <span className=' text-violet'>@{props.replay.replyingTo}</span>
          {' ' + props.replay.content}
        </p>
        {replayForm ? (
          <ReplayForm
            commentId={props.commentId}
            replayTo={user.username}
            setReplayForm={setReplayForm}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Replay;
