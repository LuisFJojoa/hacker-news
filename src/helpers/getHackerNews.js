import { deleteEmptyNews } from "./deleteEmptyHackerNews";


export const getHackerNews = async (techCategory, page) => {
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${techCategory}&page=${page-1}&hitsPerPage=10`;
  const request = await fetch(url);

  const { hits, nbPages:totalHackerNews} = await request.json();
  const hackerNews = hits.map((hit) => ({
    id: hit.story_id,
    title: hit.story_title,
    author: hit.author,
    created_at: hit.created_at,
    url: hit.story_url,
    favState: false
  }));
  const finalHackerNews = await deleteEmptyNews(hackerNews);
  return {finalHackerNews, totalHackerNews };
};
