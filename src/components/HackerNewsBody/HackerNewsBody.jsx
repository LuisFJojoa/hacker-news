import { HackerNewsGrid, HackerNewsMenu, HackerNewsDropbox, HackerNewsPagination } from "../";

import Box from "@mui/material/Box";
import { useContext } from "react";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";

export const HackerNewsBody = () => {
  const {hackerNews, isLoading} = useContext(HackerNewsAppContext)
  console.log(isLoading);
  return (
    <>
      <Box>
        <Box>
          <div className="header-body-container">
            <HackerNewsMenu />
            <HackerNewsDropbox />
          </div>
        </Box>

        {
          isLoading 
          ? <h1>Loading...</h1>
          :
          <><Box>
              <HackerNewsGrid hackerNews={[...hackerNews]}/>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
                <HackerNewsPagination />
              </Box></>
        }
        
      </Box>
    </>
  );
};
