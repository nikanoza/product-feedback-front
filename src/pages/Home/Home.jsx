import { Header, FilterHeader } from 'components';
import { FeedbackComponent } from 'components';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const [filterBy, setFilterBy] = useState('Most Upvotes');

  const feedbacks = useSelector((state) => state.feedbacks.items);

  return (
    <div className='w-full min-h-full pb-18 md:pt-14 bg-extraLightGray lg:flex lg:px-10 lg:pt-24 lg:gap-x-8 xl:px-40'>
      <Header />
      <div className='lg:w-full'>
        <div className='w-full p-0 md:px-10 lg:px-0'>
          <FilterHeader setFilterBy={setFilterBy} />
        </div>
        <div
          id='feedbacks-box'
          className='pt-8 px-6 w-full flex flex-col gap-y-4 bg-extraLightGray md:px-10 lg:px-0'
        >
          {feedbacks.map((feedback) => (
            <FeedbackComponent key={feedback.id} feedback={feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
