//Render de la vista categorias//

export const renderCategories = () => {
    //Tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");
    //creamos elementos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo">Todos Los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;
//añadimos dinamicamente el evento click

    const liElements = ulList.querySelectorAll("li")
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () => {
            handleClick(liElement);
        });
    });

//verificamos y manejamos el estilo del elemnto activo
    const handleClick = (elemento) => {
        liElements.forEach((el) => {
            if (el.classList.contains("liActive")) {
            el.classList.remove("liActive");
        } else {
            if (elemento === el){
                el.classList.add("liActive");
        }
    }
});
    };
};