import { Button, Input, Textarea } from 'components';
import { SelectStatuses } from 'components/EditFeedback';
import { CategorySelect } from 'components/NewFeedback';
import { useEditFeedback } from 'hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteFeedback } from 'services';
import { feedbacksActions } from 'store';
import { fetchStatuses } from 'store';
import { fetchCategories } from 'store';
import { fetchSingleFeedback } from 'store';
import { ArrowLeft, Edit } from 'svg';

const EditFeedback = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feedbacks = useSelector((state) => state.feedbacks.items);
  const feedback = useSelector((state) => state.singleFeedback.feedback);

  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    titleValidation,
    descriptionValidation,
    setValue,
  } = useEditFeedback();

  useEffect(() => {
    if (feedback.title.length === 0) {
      dispatch(fetchSingleFeedback(id));
    }
  }, [dispatch, id, feedback.title.length]);

  const categories = useSelector((state) => state.category.items);
  const statuses = useSelector((state) => state.statuses.items);
  const category = categories.find(
    (category) => category.id === feedback.category_id
  );

  const status = statuses.find((status) => status.id === feedback.status_id);
  useEffect(() => {
    if (status) {
      setValue('status', status.name);
    }
    if (feedback.title) {
      setValue('title', feedback.title);
    }
    if (feedback.description) {
      setValue('description', feedback.description);
    }
    if (category) {
      setValue('category', category.name);
    }
  }, [category, feedback.description, feedback.title, setValue, status]);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [categories.length, dispatch]);

  useEffect(() => {
    if (statuses.length === 0) {
      dispatch(fetchStatuses());
    }
  }, [statuses.length, dispatch]);

  const backMain = () => {
    navigate('/feedbacks/' + id);
  };

  const onRemoveFeedback = async () => {
    try {
      await deleteFeedback(id);
      if (feedbacks.length > 0) {
        dispatch(feedbacksActions.removeFeedback(id));
      }
      navigate('/');
    } catch (error) {}
  };

  return (
    <div className='w-full h-full bg-extraLightGray pt-9 px-6 pb-18 md:px-28 md:pt-14 md:pb-56 xl:px-0 lg:flex lg:justify-center'>
      <div id='wrapper' className='w-full xl:w-2/5'>
        <Link to={'/'} className='flex gap-x-4 items-center'>
          <ArrowLeft color='#4661E6' />
          <span className='jost-b-h4 text-gray'>Go Back</span>
        </Link>
        {feedback.title.length > 0 ? (
          <form
            className='w-full rounded-cardBorderRadius bg-white mt-14 px-6 pb-6'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              id='icon-box'
              className='w-10 h-10 rounded-full bg-headerGradient flex justify-center items-center -translate-y-1/2'
            >
              <Edit />
            </div>
            <h2 className='jost-b-h3 text-darkBlueTwo mt-1 md:jost-b-h1'>
              Editing ‘{feedback.title}’
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
            <div id='status-box' className='mt-6'>
              <label htmlFor='status' className='jost-b-h4 text-darkBlueTwo'>
                Update Status
              </label>
              <p className='jost-r-h3 text-gray mb-4'>Change feature state</p>
              <SelectStatuses
                register={register}
                label='status'
                onChange={setValue}
                name={status.name}
              />
            </div>
            <div id='description-box' className='mt-6'>
              <label
                htmlFor='description'
                className='jost-b-h4 text-darkBlueTwo'
              >
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
                id='save-feedback-btn'
                type='submit'
                className='w-full md:w-36 h-10 md:h-11 text-white jost-b-h4 bg-violet hover:bg-violetHover rounded-cardBorderRadius'
              >
                Save Changes
              </Button>
              <Button
                id='cancel-btn'
                type='button'
                onClick={backMain}
                className='w-full h-10 md:h-11 md:w-24 text-white jost-b-h4 bg-darkBlueTwo hover:bg-darkBlueTwoHover mt-4 md:mt-0 rounded-cardBorderRadius'
              >
                Cancel
              </Button>
              <Button
                id='cancel-btn'
                type='button'
                onClick={onRemoveFeedback}
                className='w-full h-10 md:h-11 md:w-24 text-white jost-b-h4 bg-blood hover:bg-bloodHover mt-4 md:mt-0 md:mr-auto rounded-cardBorderRadius'
              >
                Delete
              </Button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default EditFeedback;
