import axios from 'axios';

const KEY = '7ef9ec3d0132c19ab4685d32429ba26e';
const API_URL = 'https://api.themoviedb.org/3';

export async function GetMovieTrending(page = 1) {
  const url = `${API_URL}/trending/movie/day?api_key=${KEY}&page=${page}`;
  const { data } = await axios.get(url);
  return data.results;
}
GetMovieTrending();

export async function GetSearchMovies(query) {
  const url = `${API_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}`;
  const response = await axios.get(url);
  return response.data.results;
}

export async function GetMovieDetails(movieId) {
  const url = `${API_URL}/movie/${movieId}?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}

export async function GetMovieCast(movieId) {
  const url = `${API_URL}/movie/${movieId}/credits?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}

export async function GetMovieReviews(movieId) {
  const url = `${API_URL}/movie/${movieId}/reviews?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data.results;
}
