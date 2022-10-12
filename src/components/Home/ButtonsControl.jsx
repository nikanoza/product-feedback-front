import { Button } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'store';

const ButtonsControl = () => {
  const categories = useSelector((state) => state.category.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
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
      {categories.map((category) => (
        <Button
          key={category.id}
          id={'btn-' + category.id}
          className={`py-1 px-4 bg-lightGray rounded-cardBorderRadius text-electric jost-b-h4 md:py-0 md:h-7 ${
            category.name.length < 3 ? 'uppercase' : 'capitalize'
          }`}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default ButtonsControl;
