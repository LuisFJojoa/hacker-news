import { HackerNewsGrid, HackerNewsMenu, HackerNewsDropbox, HackerNewsPagination } from "../";

import Box from "@mui/material/Box";

export const HackerNewsBody = () => {
  
  return (
    <>
      <Box>
        <Box>
          <div className="header-body-container">
            <HackerNewsMenu />
            <HackerNewsDropbox />
          </div>
        </Box>
        <Box>
          <HackerNewsGrid />
        </Box>
        <Box sx = {{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
          <HackerNewsPagination/>
        </Box>
      </Box>
    </>
  );
};
