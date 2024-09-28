import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './murkup';
import { showLoader, hideLoader } from './loader';

refs.gelleryForm.addEventListener('submit', handlerSubmit);

async function handlerSubmit(evt) {
  evt.preventDefault();
  refs.gelleryList.innerHTML = '';
  showLoader();
  const query = evt.currentTarget.elements.search.value.trim();
  try {
    const response = await getPhotos(query);
    refs.gelleryList.innerHTML = createMarkup(response.results);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
