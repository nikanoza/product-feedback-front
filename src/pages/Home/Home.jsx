import { Header, FilterHeader } from 'components';
import { useState } from 'react';

const Home = () => {
  const [filterBy, setFilterBy] = useState('Most Upvotes');
  console.log(filterBy);
  return (
    <div className='w-full h-full'>
      <Header />
      <FilterHeader setFilterBy={setFilterBy} />
    </div>
  );
};

export default Home;
