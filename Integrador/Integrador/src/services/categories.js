//Render de la vista categorias//

export const renderCategories = ()=> {
    const ulList = document.getElementById(listFilter);
    ulList.innerHTML =`
    <li id="Todo">Todos Los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;
};