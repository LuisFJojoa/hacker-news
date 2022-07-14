import { useContext, useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

import "./styles.css";
import angularIcon from "../../assets/png/image-138@2x.png";
import reactIcon from "../../assets/png/image-140@2x.png";
import vueIcon from "../../assets/png/image-141@2x.png";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";

export const HackerNewsDropbox = () => {
  const { dispatch, techCategory, hackerNews, favsHackerNews } =
    useContext(HackerNewsAppContext);

  const onDispatch = (tCategory) => {
    dispatch({
      type: "UPDATE_CATEGORY",
      techCategory: tCategory,
      page: 1,
    });
    localStorage.setItem(
      "oldData",
      JSON.stringify({
        hackerNews: [],
        page: 1,
        techCategory: tCategory,
        favsHackerNews: favsHackerNews,
        isAllnews: true
      })
    );
  };

  const handleChangeNews = ({ target: { value } }) => {
    onDispatch(value);
  };

  return (
    <FormControl
      sx={{
        width: { xs: "78%", sm: "30%", md: "30%", lg: "15%" },
        ml: { xs: 5, sm: 10, md: 10, lg: 12 },
        mt: { xs: 3, sm: 1, md: 1, lg: 1 },
        mb: { xs: 3}
      }}
      size="small"
      className="dropbox-container"
    >
      <InputLabel id="demo-select-small">Select your news</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={techCategory}
        label="techChoosen"
        onChange={handleChangeNews}
      >
        <MenuItem value="Angular">
          <Box
            component="img"
            sx={{
              height: "18px",
              width: "16px",
              fontSize: "14px",
              fontWeigth: "400",
              textAlign: "center",
              mr: 1.5,
            }}
            alt={`Angular icon`}
            src={angularIcon}
          />
          Angular
        </MenuItem>
        <MenuItem value="React">
          <Box
            component="img"
            sx={{
              height: "12px",
              width: "16px",
              fontSize: "14px",
              fontWeigth: "400",
              textAlign: "center",
              mr: 1.5,
            }}
            alt={`React icon`}
            src={reactIcon}
          />
          React
        </MenuItem>
        <MenuItem value="Vue">
          <Box
            component="img"
            sx={{
              height: "14px",
              width: "16px",
              fontSize: "14px",
              fontWeigth: "400",
              textAlign: "center",
              mr: 1.5,
            }}
            alt={`Vue icon`}
            src={vueIcon}
          />
          Vue
        </MenuItem>
      </Select>
    </FormControl>
  );
};
