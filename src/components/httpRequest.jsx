import axios from "axios";
const BaseUrl="https://pixabay.com/api/"
const myKey="36658158-346947d8111be045c507b32da"
const perPage="12"

const fetchArticlesWithQuery = async (searchQuery,page) => {
  const response = axios.get(BaseUrl+`?q=${searchQuery}&page=${page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`);
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchArticlesWithQuery,
};