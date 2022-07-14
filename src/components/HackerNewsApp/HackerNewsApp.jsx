import { HackerNewsHeader, HackerNewsBody } from "../";
import Grid from "@mui/material/Grid";

export const HackerNewsApp = () => {

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
