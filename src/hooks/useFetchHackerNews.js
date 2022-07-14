import { useContext, useEffect, useState } from "react";
import HackerNewsAppContext from "../context/HackerNewsAppContext";
import { getHackerNews } from "../helpers/getHackerNews";

export const useFetchHackerNews = (techCategory, page) => {
  const { dispatch, hackerNews } = useContext(HackerNewsAppContext);
  const [isLoading, setIsLoading] = useState(true);

  const onDispatch = (finalHackerNews, totalHackerNews) => {
  
    dispatch({
      type: "UPDATE_HACKER_NEWS",
      hackerNews:  finalHackerNews,
      totalHackerNews: totalHackerNews ,
      isLoading: isLoading,
      page: page,
      techCategory: techCategory,
      isAllNews: true
    });
  };

  const getNews = async () => {
    const {finalHackerNews, totalHackerNews} = await getHackerNews(techCategory, page);
    setIsLoading(false);
    onDispatch([...finalHackerNews],totalHackerNews);
  };

  useEffect(() => {
    getNews();
  }, [techCategory, page]);

  return {
    hackerNews,
    isLoading,
  };
};
