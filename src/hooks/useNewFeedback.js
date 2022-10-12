import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { addFeedback } from 'services';

const useNewFeedback = () => {
  const categories = useSelector((state) => state.category.items);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: categories.length > 0 ? categories[0].name : '',
    },
  });

  const onSubmit = async (data) => {
    const category = categories.find(
      (category) => category.name === data.category
    );

    const sendObj = {
      title: data.title,
      description: data.description,
      category_id: category.id,
    };
    try {
      await addFeedback(sendObj);
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

export default useNewFeedback;
