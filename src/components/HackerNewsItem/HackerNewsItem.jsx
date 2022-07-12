import "./styles.css";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import clockSvg from "../../assets/svg/iconmonstr-time-2_8.svg";
import emptyFavSvg from "../../assets/svg/iconmonstr-favorite-2_4.svg";
import fullFavSvg from "../../assets/svg/iconmonstr-favorite-3.svg";

export const HackerNewsItem = ({ title, created_at, author, story }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    opacity: 0.8,
    borderRadius: "6px",
    border: "solid 1px #979797",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    textAlign: "left",
  }));

  return (
    <>
      <Grid item xs={8} sm={8} md={6} lg={6}>
        <Item>
          <div className="new-card">
            <div className="text-news">
              <div className="created-field">
                <img src={clockSvg} width="16" height="16" />
                <p className="created-date-autor">`${created} `</p>
              </div>
              <div className="title-box">
                <span className="new-title">{title}</span>
              </div>
            </div>
            <div>
              <p className="box-shadow">
                <img className="fav-icon" src={emptyFavSvg} width="24" height="22" />
              </p>
            </div>
          </div>
        </Item>
      </Grid>
    </>
  );
};
