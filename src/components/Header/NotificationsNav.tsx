import {
  RiNotificationLine,
  RiUserAddLine,
} from 'react-icons/ri';

import { Icon, HStack } from '@chakra-ui/react';

export const NotificationsNav = () => (
  <HStack
    spacing="8"
    mx="8"
    pr="8"
    py="1"
    color="gray.300"
    borderRightWidth="1px"
  >
    <Icon as={RiNotificationLine} fontSize="20" />
    <Icon as={RiUserAddLine} fontSize="20" />
  </HStack>
);
