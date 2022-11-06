import { Suggestion } from 'svg';

const Suggestions = (props) => {
  return (
    <div className='hidden md:flex text-white jost-b-h3 mr-9'>
      <Suggestion />
      <span className='ml-4'>{props.suggestions}</span>
      <span className='ml-1'>Suggestions</span>
    </div>
  );
};

export default Suggestions;
