import "./styles.css";
import { HackerNewsItem } from "..";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const HackerNewsGrid = ( {hackerNews} ) => {
  
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
          {
          hackerNews && hackerNews.map((hackerNew) => (
              <HackerNewsItem key={hackerNew.id} {...hackerNew} />
            ))}
            {}
        </Grid>
      </Box>
    </>
  );
};
