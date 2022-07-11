import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})
export const HackerNewsPagination = () => {
  return (
      <Stack spacing={1} sx={{
        mt: 2
      }}>
        <Pagination count={10} variant="outlined" shape="rounded" showFirstButton showLastButton color="primary" />
      </Stack>
  )
};
