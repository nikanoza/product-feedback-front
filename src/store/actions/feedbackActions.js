import { getFeedbacks } from 'services';
import { feedbacksActions } from 'store';

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
