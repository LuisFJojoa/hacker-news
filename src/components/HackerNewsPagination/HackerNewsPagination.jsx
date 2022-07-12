import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useContext } from "react";
import { HackerNewsAppContext } from "../../context/HackerNewsAppContext";
import { useFetchHackerNews } from "../../hooks/useFetchHackerNews";
import { usePagination } from "../../hooks/usePagination";
export const HackerNewsPagination = () => {
  const { hackerNews, totalHackerNews } = useContext(HackerNewsAppContext);

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;
  const count = 1;//Math.round(totalHackerNews / PER_PAGE);
  const _HACKERNEWS = usePagination(hackerNews, PER_PAGE, 50);
  // const _HACKERNEWS = usePagination(hackerNews, PER_PAGE, totalHackerNews);
  const handleChange = (e, p) => {
    setPage(p);
    //useFetchHackerNews("React", page); DESCOMENTAAAAAAAAR
    _HACKERNEWS.jump(p);
  };
  return (
    <Stack
      spacing={1}
      sx={{
        mt: 2,
      }}
    >
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        page={page}
        showFirstButton
        showLastButton
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
};
