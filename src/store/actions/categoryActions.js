import { getCategories } from 'services';
import { categoryActions } from 'store';

export const fetchCategories = () => {
  return async (dispatch) => {
    const fetchCategoriesInfo = async () => {
      const response = await getCategories();
      return response.data;
    };

    try {
      const categories = await fetchCategoriesInfo();
      dispatch(categoryActions.fetchCategory(categories));
    } catch (error) {}
  };
};
