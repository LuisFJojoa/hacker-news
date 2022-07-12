import { HackerNewsHeader, HackerNewsBody } from "../";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useFetchHackerNews } from "../../hooks/useFetchHackerNews";

export const HackerNewsApp = () => {
  const [techCategory, setTechCategory] = useState("angular");
  const [page, setPage] = useState(0)
  const { hackerNews, isLoading } = useFetchHackerNews(techCategory, page);
  return (
    <>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid container>
            <HackerNewsHeader />
          </Grid>
          {isLoading
          ? <h1>Loading...</h1>
          :<Grid container>
            <HackerNewsBody
             {...hackerNews}/>
          </Grid>
          }
        </Grid>        
    </>
  );
};
