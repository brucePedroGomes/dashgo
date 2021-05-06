import {
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSiderbarDrawer } from '../../contexts/SiderbarDrawerContext';

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export const Header = () => {
  const { onOpen } = useSiderbarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW="1480"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          icon={<Icon as={RiMenuLine} />}
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile isWideVersion={isWideVersion} />
      </Flex>
    </Flex>
  );
};
