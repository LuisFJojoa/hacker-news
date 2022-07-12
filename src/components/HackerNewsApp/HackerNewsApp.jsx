import { HackerNewsHeader, HackerNewsBody } from "../";
import Grid from "@mui/material/Grid";
import { useState } from "react";

export const HackerNewsApp = () => {
  const [techCategory, setTechCategory] = useState("angular");
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
          <HackerNewsBody techCategory={techCategory} />
        </Grid>
      </Grid>
    </>
  );
};
