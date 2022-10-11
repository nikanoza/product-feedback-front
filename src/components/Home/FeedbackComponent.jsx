import { ArrowUp, CommentsIcon } from 'svg';

const FeedbackComponent = () => {
  const voteBox = (
    <div
      id='vote-box'
      className='bg-lightGray flex py-2 px-4 rounded-cardBorderRadius items-center gap-x-2 md:flex-col md:gap-y-2 md:px-2 md:py-3 md:mr-10'
    >
      <ArrowUp />
      <span className='text-darkBlueTwo jost-b-h4'>112</span>
    </div>
  );

  const commentsBox = (
    <div id='comment-box' className='flex items-center gap-x-1'>
      <CommentsIcon />
      <span className='text-darkBlueTwo jost-b-h4'>2</span>
    </div>
  );

  return (
    <div className='p-6 bg-white rounded-cardBorderRadius md:flex'>
      <div className='hidden md:block'>{voteBox}</div>
      <div id='info-box' className=''>
        <span className='text-darkBlueTwo jost-b-h4 md:jost-b-h3'>
          Add tags for solutions
        </span>
        <p className='text-gray jost-r-h3 md:jost-r-h2'>
          Easier to search for solutions based on a specific stack.
        </p>
        <div className='py-1 px-4 bg-lightGray rounded-cardBorderRadius text-electric jost-b-h4 mt-2 w-fit md:mt-3 md:jost-b-h3'>
          Enhancement
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
