import { renderCategories } from "./src/services/categories";
import { openModal } from "./src/view/modal";
import { handleGetProductsToStore } from "./src/view/store";
import './style.css'

//=====APLICACION=======//

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
};

export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
    productoActivo = productoIn;
};

handleGetProductsToStore();

renderCategories();

//Header//
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
    openModal();

});

//buttonsearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {;

});