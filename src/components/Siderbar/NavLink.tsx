import {
  Text,
  Link,
  Icon,
  LinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';

type Props = {
  icon: ElementType;
  children: string;
} & LinkProps;

export const NavLink = ({
  children,
  icon,
  ...rest
}: Props) => (
  <Link display="flex" alignItems="center" {...rest}>
    <Icon as={icon} fontSize="20" />
    <Text ml="4" fontWeight="medium">
      {children}
    </Text>
  </Link>
);
