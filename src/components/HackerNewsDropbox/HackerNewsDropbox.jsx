import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import angularIcon from "../../assets/png/image-138@2x.png";
import reactIcon from "../../assets/png/image-140@2x.png";
import vueIcon from "../../assets/png/image-141@2x.png";
import "./styles.css";

import { useState } from "react";

export const HackerNewsDropbox = () => {
  const [techChoosen, setTechChoosen] = useState("");

  const handleChangeNews = ({ target }) => {
    setTechChoosen(target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        width: { xs: "60%", sm: "30%", md: "30%", lg: "15%" },
        ml: { xs: 12, sm: 10, md: 10, lg: 25 },
        mt: 5,
      }}
      size="small"
      className="dropbox-container"
    >
      <InputLabel id="demo-select-small">Select your news</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={techChoosen}
        label="techChoosen"
        onChange={handleChangeNews}
      >
        <MenuItem value="angular">
          <Box
            component="img"
            sx={{
              height: 18,
              width: 16,
              fontSize: "14px",
              fontWeight: "400",
              textAlign: "center",
              mr: 1.5,
            }}
            alt="Angular icon"
            src={angularIcon}
          />
          Angular
        </MenuItem>
        <MenuItem value="react">
          <Box
            component="img"
            sx={{
              height: 12,
              width: 16,
              fontSize: "14px",
              fontWeight: "400",
              textAlign: "center",
              mr: 1.5,
            }}
            alt=" icon"
            src={reactIcon}
          />
          React
        </MenuItem>
        <MenuItem value="vue">
          <Box
            component="img"
            sx={{
              height: 14,
              width: 16,
              fontSize: "14px",
              fontWeight: "400",
              textAlign: "center",
              mr: 1.5,
            }}
            alt="Angular icon"
            src={vueIcon}
          />
          Vue
        </MenuItem>
      </Select>
    </FormControl>
  );
};
