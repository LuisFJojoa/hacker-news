import { HackerNewsHeader, HackerNewsBody } from "../";
import Grid from "@mui/material/Grid";
import { useContext, useEffect, useState } from "react";
import { useFetchHackerNews } from "../../hooks/useFetchHackerNews";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";

export const HackerNewsApp = () => {
  const {techCategory, page} = useContext(HackerNewsAppContext)
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
