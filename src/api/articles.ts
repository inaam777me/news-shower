export const fetchArticles = async (searchQuery = "") => {
  const url = searchQuery
    ? `https://api.spaceflightnewsapi.net/v4/articles/?search=${searchQuery}`
    : "https://api.spaceflightnewsapi.net/v4/articles/";
  const response = await fetch(url);
  const data = await response.json();
  return data.results || [];
};
