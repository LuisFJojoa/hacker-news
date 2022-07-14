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
      <Box>
        <Box>
          <div className="header-body-container">
            <HackerNewsMenu />
            {
              isAllNews && <HackerNewsDropbox /> 
            }
            
          </div>
        </Box>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : isAllNews === false ? (
          <Box>
            <HackerNewsGrid hackerNews={[...favsHackerNews]} />
          </Box>
        ) : (
          <Box>
            <HackerNewsGrid hackerNews={[...hackerNews]} />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HackerNewsPagination />
        </Box>
      </Box>
    </>
  );
};
