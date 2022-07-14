import { useContext, useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "/styles.css";
import { getHoursToCreated } from "../../helpers/convertDateToHours";
import HackerNewsAppContext from "../../context/HackerNewsAppContext";

import clockSvg from "../../assets/svg/iconmonstr-time-2_8.svg";
import emptyFavSvg from "../../assets/svg/iconmonstr-favorite-2_4.svg";
import fullFavSvg from "../../assets/svg/iconmonstr-favorite-3.svg";

export const HackerNewsItem = (hackerNew) => {
  const { title, created_at, author, url, favState } = hackerNew;
  const [svgIcon, setSvgIcon] = useState();
  const { dispatch, page, techCategory, favsHackerNews, hackerNews } =
    useContext(HackerNewsAppContext);

  useEffect(() => {
    setSvgIcon(favState ? fullFavSvg : emptyFavSvg);
  }, []);

  const onAddFav = (evt) => {
    evt.preventDefault(); 
    evt.stopPropagation(); 
    setSvgIcon(favState ?  emptyFavSvg: fullFavSvg);
    onDispatch();
  };

  const onDispatch = () => {

    if (!favState) {
      dispatch({
        type: "UPDATE_FAV",
        favHackerNew: hackerNew,
        favsHackerNews: favsHackerNews
      });

      dispatch({
        type: "UPDATE_STATE_FAV",
        id: hackerNew.id
      })
      
    } else {
      dispatch({
        type: "DELETE_FAV",
        idToDelete: hackerNew.id
      });
    }

    localStorage.setItem(
      "oldData",
      JSON.stringify({
        hackerNews: hackerNews,
        page: page,
        techCategory: techCategory,
        favsHackerNews: !favState
          ? [...favsHackerNews, hackerNew]
          : favsHackerNews.filter(
              (favHackerNew) => favHackerNew.id !== hackerNew.id
            ),
        isAllNews: true,
      })
    );
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    opacity: 0.8,
    borderRadius: "6px",
    border: "solid 1px #979797",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    textAlign: "left"
  }));

  return (
    <>
      <Grid item xs={8} sm={8} md={6} lg={6}>
        <a href={`${url}`} target="_blank">
          <Item className="item-new">
            <div className="new-card">
              <div className="text-news">
                <div className="created-field">
                  <img src={clockSvg} width="16" height="16" />
                  <p className="created-date-autor">
                    {`${getHoursToCreated(created_at)} by ${author}`}
                  </p>
                </div>
                <div className="title-box">
                  <span className="new-title">{title}</span>
                </div>
              </div>
              <div>
                <p id="box-shadow">
                  <img
                    onClick={onAddFav}
                    id="fav-icon"
                    src={svgIcon}
                    width="24px"
                    height="22px"
                  />
                </p>
              </div>
            </div>
          </Item>
        </a>
      </Grid>
    </>
  );
};
