import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Suggestions } from '.';

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
  control: () => ({
    backgroundColor: 'transparent',
    display: 'flex',
    color: 'white',
    border: 'none',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (styles) => ({ ...styles, color: '#FFFFFF' }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const color = 'white';
    const fontFamily = ['Jost', 'sans-serif'];
    const fontWeight = 700;
    const fontSize = '13px';
    const lineHeight = '18.79px';
    const letterSpacing = '-0.2px';
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      color,
      fontFamily,
      fontWeight,
      fontSize,
      lineHeight,
      letterSpacing,
    };
  },
};

const FilterHeader = (props) => {
  return (
    <div className='w-full h-14 bg-darkBlue flex px-4 py-8 items-center md:mt-10 md:rounded-cardBorderRadius lg:mt-0'>
      <div id='sort-box' className='flex items-center'>
        <Suggestions />
        <span className='jost-r-h3 text-white md:jost-r-h2'>sort by :</span>
        <Select
          defaultValue={{
            value: 'Most Upvotes',
            label: (
              <div className='text-white jost-b-h4 border-none md:jost-b-h3'>
                Most Upvotes
              </div>
            ),
          }}
          onChange={(option) => props.setFilterBy(option.value)}
          options={options}
          styles={customStyles}
        />
      </div>
      <Link
        className='px-4 py-3 text-white jost-b-h4 bg-violet hover:bg-violetHover whitespace-nowrap rounded-cardBorderRadius ml-auto'
        id='add-feedback-btn'
        to={'/feedbacks/new'}
      >
        + Add Feedback
      </Link>
    </div>
  );
};

export default FilterHeader;
