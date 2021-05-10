import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps,
} from '@chakra-ui/react';
import {
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

type Props = {
  name: string;
  label?: string;
} & InputProps;

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = ({ name, label, ...rest }, ref) => {
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
        ref={ref}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
