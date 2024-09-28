import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './murkup';
import { showLoader, hideLoader } from './loader';
import { showBtn, hideBtn } from './btn';

let page = 1;
let query = null;

async function handlerSubmit(evt) {
  evt.preventDefault();
  refs.gelleryList.innerHTML = '';
  page = 1;
  showLoader();
  hideBtn();
  query = evt.currentTarget.elements.search.value.trim();
  try {
    const response = await getPhotos(query, page);
    refs.gelleryList.innerHTML = createMarkup(response.results);
    if (response.total > 12) {
      showBtn();
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

async function handlerClick() {
  page +=1;
  showLoader();
  try {
	const response = await getPhotos(query, page);
	refs.gelleryList.insertAdjacentHTML('beforeend', createMarkup(response.results));
	const lastPage = Math.ceil(response.total / 12)
	if(lastPage === page){
		hideBtn()
		alert('this is the last page')
	}
	
  } catch (error) {
	console.error(error)
  }finally{
	hideLoader();
  }

}

refs.gelleryForm.addEventListener('submit', handlerSubmit);
refs.loadMoreBtn.addEventListener('click', handlerClick);
