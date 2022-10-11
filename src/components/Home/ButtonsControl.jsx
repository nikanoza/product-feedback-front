import { Button } from 'components';

const ButtonsControl = () => {
  const buttons = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  return (
    <div
      id='buttons-panel'
      className='w-full pt-6 pl-6 pr-4 pb-6 bg-white rounded-cardBorderRadius flex flex-wrap gap-x-2 gap-y-3 md:h-44 md:w-56 lg:w-64'
    >
      <Button
        id='btn-all'
        className='py-1 px-4 bg-lightGray rounded-cardBorderRadius text-electric jost-b-h4 md:py-0 md:h-7'
      >
        All
      </Button>
      {buttons.map((button) => (
        <Button
          key={button}
          id={'btn-' + button}
          className='py-1 px-4 bg-lightGray rounded-cardBorderRadius text-electric jost-b-h4 md:py-0 md:h-7'
        >
          {button}
        </Button>
      ))}
    </div>
  );
};

export default ButtonsControl;
