import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Siderbar } from '../../components/Siderbar';

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Form = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('E-mail invalido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(8, 'Sua senha deve conter no mínimo 8 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas não coincidem'),
});

const CreateUser = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const errors = formState.errors;

  const handleCreateUser: SubmitHandler<Form> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Siderbar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6,', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading flex="1" borderRadius={8} bg="gray.800">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid
              w="100%"
              minChildWidth="240px"
              spacing={['6,', '8']}
            >
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid
              w="100%"
              minChildWidth="240px"
              spacing={['6,', '8']}
            >
              <Input
                name="password"
                type="password"
                error={errors.password}
                label="Senha"
                {...register('password')}
              />
              <Input
                name="password_confirmation"
                type="password"
                error={errors.password_confirmation}
                label="Confirmar senha"
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" gridGap="4" justify="flex-end">
            <Link href="/users" passHref>
              <Button colorScheme="whiteAlpha" as="a">
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              colorScheme="pink"
              isLoading={formState.isSubmitting}
            >
              Salvar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
