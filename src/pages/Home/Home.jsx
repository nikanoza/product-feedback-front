import { Header, FilterHeader } from 'components';
import { FeedbackComponent } from 'components';
import { useState } from 'react';

const Home = () => {
  const [filterBy, setFilterBy] = useState('Most Upvotes');
  console.log(filterBy);
  return (
    <div className='w-full h-full md:pt-14 bg-extraLightGray lg:flex lg:px-10 lg:pt-24 lg:gap-x-8 xl:px-40'>
      <Header />
      <div className='lg:w-full'>
        <div className='w-full p-0 md:px-10 lg:px-0'>
          <FilterHeader setFilterBy={setFilterBy} />
        </div>
        <div
          id='feedbacks-box'
          className='pt-8 px-6 w-full flex flex-col gap-y-4 bg-extraLightGray md:px-10 lg:px-0'
        >
          <FeedbackComponent />
          <FeedbackComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
