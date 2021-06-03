import {
  Box,
  Flex,
  Button,
  Heading,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Checkbox,
  Tbody,
  Text,
  useBreakpointValue,
  Spinner,
  Link,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { useState } from 'react';

import { RiAddLine, RiEditFill } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Siderbar } from '../../components/Siderbar';
import { api } from '../../services/api';

import { useUsers } from '../../services/hooks/userUsers';
import { queryClient } from '../../services/queryClient';

const UserList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const { data } = await api.get(`users/${userId}`);
        return data;
      },
      {
        staleTime: 1000 * 60 * 5, // 5 minutes
      }
    );
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="pink" ml="4" />
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>
          {isLoading ? (
            <Flex justifyContent="center">
              {' '}
              <Spinner />{' '}
            </Flex>
          ) : error ? (
            <Flex>
              <Text>Error</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th
                      px={['4', '4,', '6']}
                      color="gray.300"
                      width="8"
                    >
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th w="6"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['4', '4,', '6']}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Link
                              color="purple.400"
                              onMouseEnter={() =>
                                handlePrefetchUser(user.id)
                              }
                            >
                              <Text fontWeight="bold">
                                {user.name}
                              </Text>
                            </Link>

                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="none"
                            leftIcon={
                              <Icon as={RiEditFill} fontSize="16" />
                            }
                          >
                            {isWideVersion ? 'Editar' : ''}
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
