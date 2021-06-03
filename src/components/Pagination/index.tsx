import { Stack, Box, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

type Props = {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
};

export const Pagination = ({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: Props) => {
  const lastPage = Math.floor(
    totalCountOfRegisters / registerPerPage
  );

  const siblingsCount = 2;

  const previousPage =
    currentPage > 1
      ? generatePagesArray(
          currentPage - 1 - siblingsCount,
          currentPage - 1
        )
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount)
        )
      : [];

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de
        <strong> 100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" textAlign="center" width="8">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => (
            <PaginationItem
              key={page}
              number={page}
              onPageChange={onPageChange}
            />
          ))}

        <PaginationItem
          number={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPage.length > 0 &&
          nextPage.map((page) => (
            <PaginationItem
              key={page}
              number={page}
              onPageChange={onPageChange}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" textAlign="center" width="8">
                ...
              </Text>
            )}
            <PaginationItem
              number={lastPage}
              onPageChange={onPageChange}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};
