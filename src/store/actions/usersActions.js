import { getUsers } from 'services';
import { usersActions } from 'store/slices';

export const fetchUsers = () => {
  return async (dispatch) => {
    const fetchUsersInfo = async () => {
      const response = await getUsers();
      return response.data;
    };

    try {
      const users = await fetchUsersInfo();
      dispatch(usersActions.fetchUsers(users));
    } catch (error) {}
  };
};
