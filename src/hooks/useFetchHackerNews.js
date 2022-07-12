import { useContext, useEffect, useState } from "react";
import HackerNewsAppContext from "../context/HackerNewsAppContext";
import { getHackerNews } from "../helpers/getHackerNews";

export const useFetchHackerNews = (techCategory, page) => {
  const { dispatch } = useContext(HackerNewsAppContext);
  const [hackerNews, setHackerNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onDispatch = ( totalHackerNews) => {
    dispatch({
      type: "UPDATE_HACKER_NEWS",
      hackerNews:  hackerNews,
      totalHackerNews: totalHackerNews ,
      isLoading: isLoading
    });
  };

  const getNews = async () => {
    const {finalHackerNews, totalHackerNews} = await getHackerNews(techCategory, page);
    setHackerNews(finalHackerNews);
    setIsLoading(false);
    onDispatch(totalHackerNews);
  };

  useEffect(() => {
    getNews();
  }, []);

  return {
    hackerNews,
    isLoading,
  };
};
