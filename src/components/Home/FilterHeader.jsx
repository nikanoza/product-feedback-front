import { useState } from 'react';
import Select from 'react-select';

const options = [
  {
    value: 'Most Upvotes',
    label: 'Most Upvotes',
    className: 'bg-red-500',
  },
  {
    value: 'Least Upvotes',
    label: 'Least Upvotes',
  },
  {
    value: 'Most Comments',
    label: 'Most Comments',
  },
  {
    value: 'Least comments',
    label: 'Least comments',
  },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#AD1FEA' : '#647196',
    backgroundColor: state.isSelected ? 'rgba(58, 67, 116, 0.15)' : '#ffffff',
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    display: 'flex',
    color: 'white',
    border: 'none',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const FilterHeader = () => {
  const [filterBy, setFilterBy] = useState('Most-Upvotes');
  return (
    <div className='w-full h-14 bg-darkBlue flex px-6 py-8 items-center'>
      <div id='sort-box' className='flex items-center'>
        <span className='jost-r-3 text-white mr-2'>sort by :</span>
        <Select
          defaultValue={{
            value: 'Most Upvotes',
            label: <div className='text-white jost-b-'>Most Upvotes</div>,
          }}
          onChange={setFilterBy}
          options={options}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default FilterHeader;
