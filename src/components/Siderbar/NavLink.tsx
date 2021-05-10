import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';
import Link from 'next/link';

type Props = {
  icon: ElementType;
  children: string;
  href: string;
} & LinkProps;

export const NavLink = ({
  children,
  icon,
  href,
  ...rest
}: Props) => (
  <Link href={href} passHref>
    <ChakraLink
      display="flex"
      alignItems="center"
      {...rest}
    >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </Link>
);
