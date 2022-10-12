import { Button, Input, Textarea } from 'components';
import { CategorySelect } from 'components/NewFeedback';
import { useNewFeedback } from 'hooks';
import { Link } from 'react-router-dom';
import { ArrowLeft, NewIcon } from 'svg';
import { Plus } from 'svg';

const NewFeedback = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    titleValidation,
    descriptionValidation,
    setValue,
  } = useNewFeedback();
  return (
    <div className='w-full h-full bg-extraLightGray pt-9 px-6 pb-18 md:px-28 md:pt-14 md:pb-56 xl:px-0 lg:flex lg:justify-center'>
      <div id='wrapper' className='w-full xl:w-2/5'>
        <Link to={'/'} className='flex gap-x-4 items-center'>
          <ArrowLeft color='#4661E6' />
          <span className='jost-b-h4 text-gray'>Go Back</span>
        </Link>
        <form
          className='w-full rounded-cardBorderRadius bg-white mt-14 px-6 pb-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            id='icon-box'
            className='w-10 h-10 md:hidden rounded-full bg-headerGradient flex justify-center items-center -translate-y-1/2'
          >
            <Plus />
          </div>
          <div className='w-14 h-14 hidden md:flex rounded-full bg-headerGradient justify-center items-center -translate-y-1/2'>
            <NewIcon />
          </div>
          <h2 className='jost-b-h3 text-darkBlueTwo mt-1 md:jost-b-h1'>
            Create New Feedback
          </h2>
          <div id='title-box' className='mt-6'>
            <label htmlFor='title' className='jost-b-h4 text-darkBlueTwo'>
              Feedback Title
            </label>
            <p className='jost-r-h3 text-gray'>
              Add a short, descriptive headline
            </p>
            <Input
              type='text'
              register={register}
              label='title'
              validation={titleValidation}
              id='title'
              className={`w-full h-12 rounded p-4 jost-r-h3 text-darkBlueTwo bg-extraLightGray mt-4 ${
                errors.title ? 'border-blood border' : ''
              }`}
            />
            <div
              id='title-err'
              className='w-full h-6 text-blood jost-r-h3 md:jost-r-h2'
            >
              {errors.title && errors.title.message}
            </div>
          </div>
          <div id='category-box' className='mt-6'>
            <label htmlFor='category' className='jost-b-h4 text-darkBlueTwo'>
              Category
            </label>
            <p className='jost-r-h3 text-gray mb-4'>
              Choose a category for your feedback
            </p>
            <CategorySelect
              register={register}
              label='category'
              onChange={setValue}
            />
          </div>
          <div id='description-box' className='mt-6'>
            <label htmlFor='description' className='jost-b-h4 text-darkBlueTwo'>
              Feedback Detail
            </label>
            <p className='jost-r-h3 text-gray mb-4'>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <Textarea
              id='description'
              register={register}
              label='description'
              validation={descriptionValidation}
              className={`w-full h-32 md:jost-r-h2 p-4 rounded-cardBorderRadius jost-r-h3 text-darkBlueTwo bg-extraLightGray resize-none ${
                errors.title ? 'border-blood border' : ''
              }`}
            />
            <div
              id='description-err'
              className='w-full h-6 text-blood jost-r-h3'
            >
              {errors.description && errors.description.message}
            </div>
          </div>
          <div className='w-full mt-4 items-center md:flex md:flex-row-reverse md:gap-x-4 '>
            <Button
              id='add-feedback-btn'
              type='submit'
              className='w-full md:w-36 h-10 md:h-11 text-white jost-b-h4 bg-violet hover:bg-violetHover rounded-cardBorderRadius'
            >
              Add Feedback
            </Button>
            <Button
              id='cancel-btn'
              type='button'
              className='w-full h-10 md:h-11 md:w-24 text-white jost-b-h4 bg-darkBlueTwo hover:bg-darkBlueTwoHover mt-4 md:mt-0 rounded-cardBorderRadius'
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewFeedback;
