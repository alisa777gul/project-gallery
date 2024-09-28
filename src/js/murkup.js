export function createMarkup(arr) {
  return arr
    .map(
      item =>
        ` <li class="gallery-item"><img src="${item.urls.small}" alt="${item.description}"></li>`
    )
    .join('');
}
