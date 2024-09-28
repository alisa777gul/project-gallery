// 'https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY'

import axios from "axios";

export async function getPhotos(query) {
    const BASE_URL = 'https://api.unsplash.com';
    const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
    const END_POINT = '/search/photos';
  try {
      const response = await axios.get(`${BASE_URL}${END_POINT}`, {
          params: {
              client_id: API_KEY,
              query: query,
              page: 1,
              per_page: 12,
              orientation: 'portrait',
        }
    });
      return response.data;
  } catch (error) {
    console.error(error);
  }
}