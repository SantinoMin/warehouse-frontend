import axios from 'axios';
import { selector } from 'recoil';
import { pageState } from '../atoms/pageState';
import { searchState } from '../atoms/searchState';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'EwlkH-pqy26hHhLtU5hSQ_rooeWR9Z79Np69uCK4q8A';
const PER_PAGE = 30;

export const imageData = selector({
  key: 'imageData',
  get: async ({ get }) => {
    const searchValue = get(searchState);
    const pageValue = get(pageState);

    // API 호출
    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      console.log(res);

      return res;
    } catch (error) {
      console.log(error);
    }
  },
});
