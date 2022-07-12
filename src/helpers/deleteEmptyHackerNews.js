export const deleteEmptyNews = async (tempHackerNews) => {
  let fullHackerNews = await tempHackerNews.filter(
    ({ author, id, created_at, title, url }) => {
      return (
        author !== null &&
        id !== null &&
        created_at !== null &&
        title !== null &&
        url !== null
      );
    }
  );
  const finalHackerNews = deleteHackerNewsDuplicated(fullHackerNews);
  return finalHackerNews;
};

const deleteHackerNewsDuplicated = (fullHackerNews) => {
  const uniqueHackerNews = Array.from(
    new Set(fullHackerNews.map((a) => a.id))
  ).map((id) => {
    return fullHackerNews.find((a) => a.id === id);
  });
  return uniqueHackerNews;
};
