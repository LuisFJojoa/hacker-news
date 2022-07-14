import { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { usePagination } from "../../hooks/usePagination";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";

export const HackerNewsPagination = () => {
  const { dispatch, hackerNews, totalHackerNews, techCategory, page, favsHackerNews } =
    useContext(HackerNewsAppContext);
  const PER_PAGE = 8;
  const count = Math.round(totalHackerNews / PER_PAGE);
  const _HACKERNEWS = usePagination(hackerNews, PER_PAGE, totalHackerNews);

  const onDispatch = (nextPage) => {
    dispatch({
      type: "UPDATE_PAGE",
      page: nextPage,
    });
    localStorage.setItem(
      "oldData",
      JSON.stringify({
        hackerNews: hackerNews,
        page: nextPage,
        techCategory: techCategory,
        favsHackerNews: favsHackerNews,
        isAllNews: true
      })
    );
  };
  const handleChange = (evt, nextPage) => {
    onDispatch(nextPage);
    _HACKERNEWS.jump(nextPage);
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
        size="small"
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
};
