import { HackerNewsItem } from "..";
import './styles.css'

export const HackerNewsGrid = ({ hackerNews }) => {
  return (
    <>

      <div className="grid-container">
      {hackerNews &&
            hackerNews.map((hackerNew) => (
              <HackerNewsItem key={hackerNew.id} {...hackerNew} />
            ))}
      </div>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          columnSpacing={{ xs: 2, sm: 4, md: 1, lg: 2 }}
          columns={{ xs: 10, sm: 10, md: 14, lg: 12 }}
        >
          
        </Grid>
      </Box> */}
    </>
  );
};
