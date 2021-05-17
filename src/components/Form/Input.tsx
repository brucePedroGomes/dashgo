import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps,
  FormErrorMessage,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  error?: FieldError;
} & InputProps;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        {...rest}
        bg="gray.900"
        focusBorderColor="pink.500"
        _hover={{ bgColor: 'gray.900' }}
        variant="filled"
        size="lg"
        ref={ref}
      />

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
