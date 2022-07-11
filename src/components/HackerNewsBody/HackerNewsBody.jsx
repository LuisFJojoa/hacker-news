import "./styles.css";
import {
  HackerNewsGrid,
  HackerNewsMenu,
  HackerNewsDropbox,
} from "../";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          <div className="header-body-container">
            <HackerNewsMenu />
              <HackerNewsDropbox/>
          </div>
          
        </Box>
        <Box
          sx={{
            width: "100%",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          <HackerNewsGrid />
        </Box>
        <Box
          sx={{
            width: "100%",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Height 20%
        </Box>
      </Box>
    </>
  );
};
