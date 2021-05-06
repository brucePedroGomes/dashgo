import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import {
  UseDisclosureReturn,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const SiderbarDrawerContext = createContext(
  {} as UseDisclosureReturn
);

export const SiderbarDrawerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SiderbarDrawerContext.Provider
      value={disclosure}
    >
      {children}
    </SiderbarDrawerContext.Provider>
  );
};

export const useSiderbarDrawer = () =>
  useContext(SiderbarDrawerContext);
