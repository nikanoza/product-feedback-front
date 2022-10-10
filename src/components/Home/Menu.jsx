import { Button } from 'components';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const buttons = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  const statuses = ['Planned', 'in-progress', 'live'];

  return (
    <div
      className='w-full h-149 absolute top-18 -left-6 bg-black bg-opacity-50'
      ref={props.backdropRef}
      onClick={props.onClick}
    >
      <div className='w-3/4 bg-extraLightGray right-0 h-full p-6 ml-auto -mr-6'>
        <div
          id='buttons-panel'
          className='w-full pt-6 pl-6 pr-4 pb-6 bg-white rounded-cardBorderRadius flex flex-wrap gap-x-2 gap-y-3'
        >
          <Button
            id='btn-all'
            className='py-1 px-4 bg-lightGray rounded-cardBorderRadius text-electric jost-b-h4'
          >
            All
          </Button>
          {buttons.map((button) => (
            <Button
              key={button}
              id={'btn-' + button}
              className='py-1 px-4 bg-lightGray rounded-cardBorderRadius text-electric jost-b-h4'
            >
              {button}
            </Button>
          ))}
        </div>
        <div
          id='roadmap-panel'
          className='w-full mt-6 pt-5 pl-6 pr-6 pb-6 bg-white rounded-cardBorderRadius'
        >
          <div id='panel-header'>
            <div
              id='roadmap-box-header'
              className='w-full flex justify-between'
            >
              <span className='jost-b-h3 text-darkBlueTwo'>Roadmap</span>
              <Link
                id='btn-roadmap'
                className='underline jost-b-h4 text-electric'
                to={'/roadmap'}
              >
                View
              </Link>
            </div>
            <div id='roadmap-statistics' className='mt-6 flex flex-col gap-y-2'>
              {statuses.map((status) => (
                <div className='w-full flex items-center' key={status}>
                  <span className='w-2 h-2 rounded-full bg-electric'></span>
                  <span className='jost-r-h1 text-gray ml-4'>{status}</span>
                  <span className='jost-b-h3 text-gray ml-auto'>3</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
