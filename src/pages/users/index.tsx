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
} from '@chakra-ui/react';
import { RiAddLine, RiEditFill } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Siderbar } from '../../components/Siderbar';

const UserList = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Siderbar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex
            mb="8"
            justify="space-between"
            align="center"
          >
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={
                <Icon as={RiAddLine} fontSize="20" />
              }
            >
              Criar novo
            </Button>
          </Flex>
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
              <Tr>
                <Td px={['4', '4,', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">
                      Pedro Gomes
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                      pedroleinar@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril,2021</Td>}
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
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
