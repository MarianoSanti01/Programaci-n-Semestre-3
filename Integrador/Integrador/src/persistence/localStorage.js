//=============LOCAL STORAGE==============//
export const handleGetProductLocalStorage =()=>{
    const products = JSON.parse(localStorage.getItem("products"))
if(products){
    return products}
else{
    return[]
}
}

//GuardarEnLocalStorage//

//Recibir el producto//
export const setInLocalStorage = (productIn)=>{
    //traer elementos//
    if(productIn){
    let productsInLocal= handleGetProductLocalStorage();

    const existingIndex = productsInLocal.findIndex(
        (productsLocal)=>
        productsLocal.id===productIn.id
)   ;
//Verificar si el elemento existe
if(existingIndex !== -1){
    //Si existe debe reemplazarse
productsInLocal[existingIndex]= productIn;
}else{
//Si no agregarse
productsInLocal.push(productIn);
}
//Setear el nuevo array
localStorage.setItem("products", JSON.stringify(productsInLocal));
}
};
