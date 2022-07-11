import "./styles.css";
import { HackerNewsGrid, HackerNewsMenu, HackerNewsPagination } from "../";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export const HackerNewsBody = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box sx={{ height: '100vh', width: "100%" }}>
        <Box
          sx={{
            padding: '40px',
            width: '100%',
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Height 20%
        </Box>
        <Box
          sx={{
            width: '100%',
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          <HackerNewsGrid/>
        </Box>
        <Box
          sx={{
            padding: '40px',
            width: '100%',
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Height 20%
        </Box>
      </Box>
    </>
    // <div className="hn-body">
    //   <Grid
    //     container
    //     spacing={1}

    //   >
    //     <Grid
    //       sx={{
    //         height: "200px",
    //         width: 100,
    //         backgroundColor: (theme) =>
    //           theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //       lg={12}
    //     >
    //       <HackerNewsMenu />
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={1}>
    //     <Grid
    //       sx={{
    //         height: "1/3",
    //         width: 100,
    //         backgroundColor: (theme) =>
    //           theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //       lg={12}
    //     >
    //       <HackerNewsGrid />
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={1}>
    //     <Grid
    //       sx={{
    //         height: "1/3",
    //         width: 100,
    //         backgroundColor: (theme) =>
    //           theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //       lg={12}
    //     >
    //       <HackerNewsPagination />
    //     </Grid>
    //   </Grid>
    // </div>
  );
};
