import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export const HackerNewsPagination = () => {
  return (
      <Stack spacing={1} sx={{
        mt: 2
      }}>
        <Pagination count={10} variant="outlined" shape="rounded" showFirstButton showLastButton color="primary" />
      </Stack>
  )
};
