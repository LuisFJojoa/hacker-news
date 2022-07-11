import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import "./styles.css";

export const HackerNewsMenu = () => {
  const [page, setPage] = useState("News");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(newPage);
  };
  return (
    <ToggleButtonGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      color="primary"
      value={page}
      exclusive
      onChange={handleChangePage}
    >
      <ToggleButton className="toogle-option" value="All">All</ToggleButton>
      <ToggleButton className="toogle-option" value="Favs">My Favs</ToggleButton>
    </ToggleButtonGroup>
  );
};
