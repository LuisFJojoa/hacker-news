import { useEffect, useState } from "react";
import { getHackerNews } from "../helpers/getHackerNews";

export const useFetchHackerNews = (techCategory) => {
  const [hackerNews, setHackerNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNews = async () => {
    const newHackerNews = await  getHackerNews(techCategory);
    setHackerNews(newHackerNews);
    setIsLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return {
    hackerNews,
    isLoading
  };
};