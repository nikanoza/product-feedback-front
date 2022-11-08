import { getFeedbacks, getSingleFeedback } from 'services';
import { feedbacksActions } from 'store';
import { singleFeedbackActions } from 'store/slices';

export const fetchFeedbacks = () => {
  return async (dispatch) => {
    const fetchFeedbacksInfo = async () => {
      const response = await getFeedbacks();
      return response.data;
    };

    try {
      const feedbacks = await fetchFeedbacksInfo();
      dispatch(feedbacksActions.fetchFeedback(feedbacks));
    } catch (error) {}
  };
};

export const fetchSingleFeedback = (id) => {
  return async (dispatch) => {
    const fetchSingleFeedback = async () => {
      const response = await getSingleFeedback(id);
      return response.data;
    };

    try {
      const feedback = await fetchSingleFeedback();
      dispatch(singleFeedbackActions.fetchFeedback(feedback));
    } catch (error) {}
  };
};
