import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps,
} from '@chakra-ui/react';

type Props = {
  name: string;
  label?: string;
} & InputProps;

export const Input = ({ name, label, ...rest }: Props) => {
  return (
    <FormControl>
      {label && (
        <FormLabel htmlFor="email">{label}</FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        {...rest}
        bg="gray.900"
        focusBorderColor="pink.500"
        _hover={{ bgColor: 'gray.900' }}
        variant="filled"
        size="lg"
      />
    </FormControl>
  );
};
