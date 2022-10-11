import { getStatuses } from 'services';
import { statusesActions } from 'store';

export const fetchStatuses = () => {
  return async (dispatch) => {
    const fetchStatusesInfo = async () => {
      const response = await getStatuses();
      return response.data;
    };

    try {
      const statuses = await fetchStatusesInfo();
      dispatch(statusesActions.fetchStatuses(statuses));
    } catch (error) {}
  };
};
