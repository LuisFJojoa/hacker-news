import {
  HackerNewsGrid,
  HackerNewsMenu,
  HackerNewsDropbox,
  HackerNewsPagination,
} from "../";

import Box from "@mui/material/Box";
import { useContext } from "react";
import { useFetchHackerNews } from "../../hooks/useFetchHackerNews";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";

export const HackerNewsBody = () => {
  const { techCategory, page, isAllNews, favsHackerNews } =
    useContext(HackerNewsAppContext);
  const { hackerNews, isLoading } = useFetchHackerNews(techCategory, page);
  return (
    <>
      <div>
        <HackerNewsMenu />
        {isAllNews && <HackerNewsDropbox />}
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : isAllNews === false ? (

        <HackerNewsGrid hackerNews={[...favsHackerNews]} />

      ) : (
        <>
          <HackerNewsGrid hackerNews={[...hackerNews]} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              pt: 0.2,
              pb: { xs: "2.5em", sm: "3.5em", md: "3em", lg: "4em" },
            }}
          >
            <HackerNewsPagination />
          </Box>
        </>
      )}
    </>
  );
};
