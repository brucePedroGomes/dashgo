import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const getUsers = async () => {
  const { data } = await api.get<{ users: User[] }>('users');

  return data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));
};

export const useUsers = () => {
  return useQuery('users', getUsers, { staleTime: 1000 * 10 });
};
