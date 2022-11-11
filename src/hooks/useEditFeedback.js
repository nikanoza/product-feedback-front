import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { editFeedback } from 'services';
import { feedbacksActions } from 'store';

const useEditFeedback = () => {
  const categories = useSelector((state) => state.category.items);
  const statuses = useSelector((state) => state.statuses.items);
  const feedback = useSelector((state) => state.singleFeedback.feedback);
  const feedbacks = useSelector((state) => state.feedbacks.items);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      status: '',
    },
  });

  const onSubmit = async (data) => {
    const category = categories.find(
      (category) => category.name === data.category
    );
    const status = statuses.find((status) => status.name === data.status);
    const sendObj = {
      title: data.title,
      description: data.description,
      category_id: category.id,
      status_id: status.id,
      id: feedback.id,
    };
    try {
      await editFeedback(sendObj);
      if (feedbacks.length > 0) {
        dispatch(feedbacksActions.editFeedback(sendObj));
      }
      navigate('/');
    } catch (error) {}
  };
  const titleValidation = {
    required: 'title is required',
    minLength: {
      value: 3,
      message: 'title should include 3 or more character',
    },
  };

  const descriptionValidation = {
    required: 'description is required',
    minLength: {
      value: 3,
      message: 'description should include 3 or more character',
    },
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    titleValidation,
    descriptionValidation,
    setValue,
  };
};

export default useEditFeedback;
