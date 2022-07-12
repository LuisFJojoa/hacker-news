import { deleteEmptyNews } from "./deleteEmptyHackerNews";


export const getHackerNews = async (techCategory) => {
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${techCategory}&page=10`;
  const request = await fetch(url);
  // console.log(request.json());
  const { hits } = await request.json();
  const hackerNews = hits.map((hit) => ({
    id: hit.story_id,
    title: hit.story_title,
    author: hit.author,
    created_at: hit.created_at,
    url: hit.story_url,
  }));
  const finalHackerNews = await deleteEmptyNews(hackerNews);
  return finalHackerNews;
};
