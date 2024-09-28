import { refs } from './refs';

export function showLoader() {
  refs.gelleryLoader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.gelleryLoader.classList.add('is-hidden');
}
