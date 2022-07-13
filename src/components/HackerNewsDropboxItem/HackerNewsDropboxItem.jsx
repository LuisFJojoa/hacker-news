import React from 'react'
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

export const HackerNewsDropboxItem = ({techCategory, svg:{icon, heigth, width}}) => {
  return (
    <MenuItem value={techCategory}>
          <Box
            component="img"
            sx={{
              height: {heigth},
              width: {width},
              fontSize: "14px",
              fontWeigth: "400",
              textAlign: "center",
              mr: 1.5,
            }}
            alt={`${techCategory} icon`} 
            src={icon}
          />
          {techCategory}
        </MenuItem>
        
  )
}
