import { useQueryClient } from '@tanstack/react-query';
import { GLOBAL_STATE_KEY } from '../../../config/cacheKey';

export const useUsernameCache = () => {
  const queryClient = useQueryClient();

  const username = queryClient.getQueryData<string>([
    GLOBAL_STATE_KEY.USER_NAME,
  ]);

  const setUsername = (value: string | undefined) =>
    queryClient.setQueryData<string>(
      [GLOBAL_STATE_KEY.USER_NAME],
      value
    );

  return { username, setUsername };
};
