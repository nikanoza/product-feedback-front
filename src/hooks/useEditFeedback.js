import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { feedbacksActions } from 'store';

const useEditFeedback = (feedback) => {
  const categories = useSelector((state) => state.category.items);
  const statuses = useSelector((state) => state.statuses.items);
  const status = statuses.find((status) => status.id === feedback.status_id);
  const category = categories.find(
    (category) => category.id === feedback.category_id
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: feedback.title,
      description: feedback.description,
      category: category.name,
      status: status.name,
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
    };
    try {
      //   const response = await addFeedback(sendObj);
      //   dispatch(feedbacksActions.addFeedback(response.data));
      //   navigate('/');
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
