import { useState, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { usePagination } from "../../hooks/usePagination";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";

export const HackerNewsPagination = () => {
  
  const [page, setPage] = useState(1);
  const { dispatch, hackerNews, totalHackerNews } = useContext(HackerNewsAppContext);
  const PER_PAGE = 12;
  const count = Math.round(totalHackerNews / PER_PAGE);
  const _HACKERNEWS = usePagination(hackerNews, PER_PAGE, totalHackerNews);

  const onDispatch = (page) => {
    dispatch({
      type: "UPDATE_PAGE",
      page: page
    });
  };
  const handleChange = (evt, page) => {
    setPage(page);
    onDispatch(page)
    _HACKERNEWS.jump(page);
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
