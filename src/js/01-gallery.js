// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line
console.log(galleryItems);


const galleryList = document.querySelector(".gallery");
const marcup = galleryItems
    .map((e) =>
        `<li class="gallery__item">
       <a class="gallery__link" href="${e.original}">
        <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
       </a>
    </li>`
    )
    .join("");
galleryList.innerHTML = marcup;

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250ms"
}
);
