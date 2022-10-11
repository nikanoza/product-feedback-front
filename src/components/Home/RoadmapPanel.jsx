import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStatuses } from 'store';

const RoadmapPanel = () => {
  const statuses = useSelector((state) => state.statuses.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatuses());
  }, [dispatch]);
  return (
    <div
      id='roadmap-panel'
      className='w-full mt-6 pt-5 pl-6 pr-6 pb-6 bg-white rounded-cardBorderRadius md:mt-0 md:w-56 md:h-44 lg:w-64'
    >
      <div id='panel-header'>
        <div id='roadmap-box-header' className='w-full flex justify-between'>
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
          {statuses.slice(1).map((status) => (
            <div className='w-full flex items-center' key={status.id}>
              <span
                className={`w-2 h-2 rounded-full`}
                style={{ backgroundColor: status.color }}
              ></span>
              <span className='jost-r-h1 text-gray ml-4'>{status.name}</span>
              <span className='jost-b-h3 text-gray ml-auto'>3</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPanel;
