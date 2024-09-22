
import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { openModal } from "./modal";

export const handleGetProductsToStore = ()=>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products)
}

export const handleRenderList = (productosIn)=>{
    const burgers = productosIn.filter((el)=> el.categories=== "Hamburguesas");
    const papas = productosIn.filter((el)=> el.categories=== "Papas");
    const gaseosas = productosIn.filter((el)=> el.categories=== "Gaseosas");

    const renderProductGroup = (productos, title) =>{
        if(
            productos.length> 0
        ){
            const productosHTML = productos.map((producto,index)=>{
                return`<div class="containerTargetItem" id='product-${producto.categories}-${index}'>
                <div>
                <img src=${producto.imagen}/>
                    <div>
                    <h2>${producto.nombre}</h2>
                    </div>
                    <div class="targetProps">
                    <p><b>Precio: </b>$ ${producto.precio}</p>
                    <p><b>Categoria: </b>$ ${producto.categories}</p>
                    </div>
                </div>
                </div>`;
            });
            return `
            <section class="sectionStore">
            <h3>${title}</h3>
            <div class="containerProductStore">
            ${productosHTML.join("")}
            </div>
            </section>
            `;
        }else{
            return "";
        }
    };
    //Renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML=`
    ${renderProductGroup(burgers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;

    const addEvents =(productsIn)=>{
        if(productsIn){
        productsIn.forEach((element,index) => {
            const productContainer = document.getElementById(`product-${element.categories}-${index}`);
            productContainer.addEventListener("click",()=>{
            setproductoActivo(element);
            openModal();
            
            });
        });
    }
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);

};