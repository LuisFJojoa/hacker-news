import { HackerNewsHeader, HackerNewsBody } from "../";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useFetchHackerNews } from "../../hooks/useFetchHackerNews";

export const HackerNewsApp = () => {
  const [techCategory, setTechCategory] = useState("angular");
  const [page, setPage] = useState(0)
  useFetchHackerNews(techCategory, page);
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
          <Grid container>
            <HackerNewsBody/>
          </Grid>
        </Grid>        
    </>
  );
};
