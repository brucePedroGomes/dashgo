import {
  Flex,
  Text,
  Box,
  Avatar,
} from '@chakra-ui/react';

type Props = {
  isWideVersion?: boolean;
};

export const Profile = ({
  isWideVersion,
}: Props) => (
  <Flex align="center">
    {isWideVersion && (
      <Box mr="4" textAlign="right">
        <Text>Pedro Gomes</Text>
        <Text color="gray.300" fontSize="small">
          pedroleinar@hotmail.com
        </Text>
      </Box>
    )}
    <Avatar
      size="md"
      name="Pedro Gomes"
      src="https://github.com/pedroleinar.png"
    />
  </Flex>
);
