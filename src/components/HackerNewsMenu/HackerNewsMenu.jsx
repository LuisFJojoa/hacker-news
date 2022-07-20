import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext } from "react";
import { useState } from "react";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";

export const HackerNewsMenu = () => {
  const { dispatch, isAllNews, favsHackerNews } =
    useContext(HackerNewsAppContext);
  const [pageMenu, setPageMenu] = useState(isAllNews ? "All" : "Faves");
  const onDispatch = () => {
    dispatch({
      type: "CHANGE_PAGE",
      isAllNews: pageMenu === "All" ? false : true,
    });
    // localStorage.setItem(
    //   "oldData",
    //   JSON.stringify({
    //     hackerNews: hackerNews,
    //     page: page,
    //     techCategory: techCategory,
    //     favsHackerNews: favsHackerNews,
    //     isAllNews: isAllNews,
    //   })
    // );
  };

  const handleChangePage = ({ target }, newPage) => {
    if (target.value == pageMenu) return;
    setPageMenu(pageMenu === "All" ? "Faves" : "All");
    onDispatch();
  };

  return (
    <ToggleButtonGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 2.5, sm: 3, md: 2, lg: 2 },
        mb: { xs: 2.5, sm: 2, md: 2, lg: 1 }
      }}
      color="primary"
      exclusive
      value={pageMenu}
      onChange={handleChangePage}
    >
      <ToggleButton
        sx={{
          textTransform: "capitalize",
          fontSize: {xs:"12px", sm: "10px", md: "10px", lg: "10px"},
          px: {xs:"2em", sm: "3em", md: "2.5em", lg: "3.5em"},
          py: {xs: 1, sm: 0.5, md: 0.5, lg: 0.5}

        }}
        value="All"
      >
        All news
      </ToggleButton>
      <ToggleButton
        sx={{
          textTransform: "capitalize",
          fontSize: {xs:"12px", sm: "10px", md: "10px", lg: "10px"},
          px: {xs:"2.5em", sm: "3.5em", md: "3em", lg: "4em"},
          py: {xs: 1, sm: 0.5, md: 0.5, lg: 0.5}
        }}
        disabled={!(favsHackerNews.length > 0)}
        value="Faves"
      >
        Faves
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
