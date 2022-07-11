import "./styles.css";
import { HackerNewsItem } from "../";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export const HackerNewsGrid = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ xs: 2, sm: 4, md: 8, lg: 8 }}
          columns={{ xs: 10, sm: 10, md: 14, lg: 16 }}
        >
          <HackerNewsItem title="All the fundamental React.js concepts, jammed this single Medium article (updated August 2019)" />
          <HackerNewsItem title="All the fundamental React.js concepts, jammed this single Medium article (updated August 2019)" />
          <HackerNewsItem title="All the fundamental React.js concepts, jammed this single Medium article (updated August 2019)" />
          <HackerNewsItem title="All the fundamental React.js concepts, jammed this single Medium article (updated August 2019)" />
          <HackerNewsItem title="All the fundamental React.js concepts, jammed this single Medium article (updated August 2019)" />
          <HackerNewsItem title="All the fundamental React.js concepts, jammed this single Medium article (updated August 2019)" />
          <HackerNewsItem title="All the fundamental React.js concepts, jammed this single Medium article (updated August 2019)" />
          <HackerNewsItem title="All the fundamental React.js concepts, jammed this single Medium article (updated August 2019)" />
        </Grid>
      </Box>
    </>
  );
};
