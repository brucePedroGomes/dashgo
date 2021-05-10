import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

type Props = {
  children: ReactElement;
} & LinkProps;

export const ActiveLink = ({
  children,
  ...rest
}: Props) => {
  const { asPath } = useRouter();

  const href =
    rest.href.toString() !== '/'
      ? rest.href.toString()
      : undefined;

  const isActive = Boolean(href && asPath.includes(href));

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
};
