import { Button } from 'components/shared';
import { useSelector } from 'react-redux';

const Replay = (props) => {
  const users = useSelector((state) => state.users.users);
  const user = users.find((human) => human.id === props.replay.userId);

  const onReplay = () => {};
  return (
    <div>
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
          id={'replay-btn' + props.replay.id}
          type='button'
          className='text-electric jost-b-h4 ml-auto'
          onClick={onReplay}
        >
          Replay
        </Button>
      </div>
      <p className='w-full text-gray jost-r-h3 mt-6'>
        <span className=' text-violet'>@{props.replay.replyingTo}</span>{' '}
        {props.replay.content}
      </p>
    </div>
  );
};

export default Replay;
