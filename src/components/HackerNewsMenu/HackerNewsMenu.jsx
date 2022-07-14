import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext } from "react";
import { useState } from "react";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";
import "./styles.css";

export const HackerNewsMenu = () => {
  const {dispatch, isAllNews, favsHackerNews } = useContext(HackerNewsAppContext)
  const [pageMenu, setPageMenu] = useState((isAllNews)?"All":"Faves");
  const onDispatch = () => {
    dispatch({
      type: "CHANGE_PAGE",
      isAllNews: (pageMenu==="All") ? false: true
    });
    // localStorage.setItem(
    //   "oldData",
    //   JSON.stringify({
    //     hackerNews: hackerNews,
    //     page: page,
    //     techCategory: techCategory,
    //     favsHackerNews: favsHackerNews,
    //     isAllNews: isAllNews
    //   })
    // );
  };

  const handleChangePage = ({target}, newPage) => {
    if (target.value == pageMenu) return;
    setPageMenu((pageMenu==="All") ? "Faves": "All");
    onDispatch()
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
      exclusive
      value = {pageMenu}
      onChange= {handleChangePage}
    >
      <ToggleButton className="toogle-option" value="All">All news</ToggleButton>
      <ToggleButton className="toogle-option" disabled={!(favsHackerNews.length > 3)} value="Faves">Faves</ToggleButton>
      
    </ToggleButtonGroup>
  );
};
