import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW="360"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input
            name="e-mail"
            label="E-mail"
            type="e-mail"
          />
          <Input
            name="password"
            label="Senha"
            type="password"
          />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
