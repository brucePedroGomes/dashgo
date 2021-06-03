import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const getUsers = async (page: number) => {
  const { data, headers } = await api.get<{ users: User[] }>(
    'users',
    {
      params: {
        page,
      },
    }
  );

  const totalCount = headers['x-total-count'];

  const users = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return {
    users,
    totalCount: Number(totalCount),
  };
};

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 10,
  });
};
