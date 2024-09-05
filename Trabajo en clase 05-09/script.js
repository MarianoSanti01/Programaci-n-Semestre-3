async function fetchUser() {
    try{
        const respuesta = await fetch("https://randomuser.me/api/");
        const data = await respuesta.json();
        console.log(data);
    
        const persona=data.results[0];
        const nombre =`${persona.name.first} ${persona.name.last}`;
        const ubicacion= `${persona.location.country} ${persona.location.state}`
        const urlImagen= persona.picture.medium;
        const divElement = document.getElementById("UserInfo");
    
        divElement.innerHTML=`
    <p>${nombre}</p>
    <p>${ubicacion}</p>
    <img src=${urlImagen} width=150/>
        `;
        console.log(nombre);
        console.log(ubicacion);
        console.log(urlImagen);
    }catch (error){
        console.log(error)
    }
}
fetchUser()

async function fetchPost() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await respuesta.json();
    const postList = document.getElementById("Postlist")
    console.log(data);

    const post=data[0].title;

    const divElement= document.getElementById("PostList")
    divElement.innerHTML=`
    <p>${post}</p>`;
    console.log(post);
}
fetchPost()