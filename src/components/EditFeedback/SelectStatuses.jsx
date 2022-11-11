import { useSelector } from 'react-redux';
import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#AD1FEA' : '#647196',
    backgroundColor: state.isSelected ? 'rgba(58, 67, 116, 0.15)' : '#ffffff',
  }),
  control: () => ({
    backgroundColor: '#F7F8FD',
    display: 'flex',
    color: '#3A4374',
    border: 'none',
    height: '48px',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (styles) => ({ ...styles, color: '#4661E6' }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const color = '#3A4374';
    const fontFamily = ['Jost', 'sans-serif'];
    const fontWeight = 400;
    const fontSize = '13px';
    const lineHeight = '18.79px';
    const letterSpacing = '-0.2px';
    const transition = 'opacity 300ms';
    const textTransform = 'capitalize';

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
      textTransform,
    };
  },
};

const SelectStatuses = (props) => {
  const statuses = useSelector((state) => state.statuses.items);

  const options = statuses.map((status) => {
    return { value: status.name, label: status.name };
  });
  return (
    <>
      {statuses.length > 0 && (
        <Select
          defaultValue={{
            value: props.name,
            label: (
              <div className='text-darkBlueTwo jost-r-h3 border-none md:jost-b-h3'>
                {props.name}
              </div>
            ),
          }}
          {...props.register(props.label)}
          onChange={(e) => {
            props.onChange('status', e.value);
          }}
          options={options}
          styles={customStyles}
        />
      )}
    </>
  );
};

export default SelectStatuses;
