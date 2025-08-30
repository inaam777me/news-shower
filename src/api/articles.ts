export const fetchArticles = async () => {
  const url =  "https://api.spaceflightnewsapi.net/v4/articles/";
  const response = await fetch(url);
  const data = await response.json();
  return data.results || [];
};
