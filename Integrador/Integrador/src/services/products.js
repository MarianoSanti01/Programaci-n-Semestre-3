//===========OPCIONES DE PRODUCTOS=============//
import { productoActivo } from "../../main";
import { setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../view/modal";
import { handleGetProductsToStore } from "../view/store";



//Guardar//
const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
});
//Funcion de guardar//
const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categories = document.getElementById("categoria").value;
    let object = null
    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio ,
            categories
        };
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
        setInLocalStorage(object);
        handleGetProductsToStore();

        closeModal();
    }
}