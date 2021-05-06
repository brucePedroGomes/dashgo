import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Siderbar } from '../../components/Siderbar';

const CreateUser = () => {
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Siderbar />
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Heading
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p="8"
          >
            Criar usuário
          </Heading>
          <Divider
            my="6"
            borderColor="gray.700"
          />
          <VStack spacing="8">
            <SimpleGrid
              w="100%"
              minChildWidth="240px"
              spacing="8"
            >
              <Input
                name="name"
                label="Nome completo"
              />
              <Input
                name="email"
                label="E-mail"
              />
            </SimpleGrid>
            <SimpleGrid
              w="100%"
              minChildWidth="240px"
              spacing="8"
            >
              <Input
                name="password"
                type="password"
                label="Senha"
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex
            mt="8"
            gridGap="4"
            justify="flex-end"
          >
            <Button colorScheme="whiteAlpha">
              Cancelar
            </Button>
            <Button colorScheme="pink">
              Salvar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
