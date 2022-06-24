console.log("Hola, gatos")

const api ='https://api.thecatapi.com/v1/images/search?limit=5&api_key=00a52bc8-8a8e-45e1-b1bc-8ab8d4d29ee3'
const api_Favorites ='https://api.thecatapi.com/v1/favourites?limit=3&api_key=00a52bc8-8a8e-45e1-b1bc-8ab8d4d29ee3'
//Esta constante es para cada uno de los fech

//fech con "promesa"
// fetch(api)
// // convertimos la respuesta a objetos de js
//   .then(res => res.json())
//   // ahora podemos requerir información
//   .then(data => {
//       //Seleccionamos la etiqueta de html de img, para poder responder con las imagenes de el API
//     const img = document.querySelector('img');
//     //Con esto modificamos el valor de img con los datos de la API
//     img.src = data[0].url;
//   });

// lógica asincrona
async function loadRandomCat() {
//El fech lo convertimos a asyncrono
    const res = await fetch(api);
    const data = await res.json();
// Llamamos a la data
console.log('Random')
console.log(data)
{
    if (res.status !==200) {
        spanError.innerHTML = "Hubo un error: " + res.status
    } else{
        // const img = document.querySelector('img');
    //Ahora en vez de Query selector llamamos por "id"
        const img1 = document.getElementById('img1')
        const img2 = document.getElementById('img2')
        const img3 = document.getElementById('img3')
    //img.src = data[0].url;
    // Ahora tenemos que poner a cada imagen su llamado a data, en cada una de ellas

        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;

    }
}
}
async function loadFavoriteCat() {
    const res = await fetch(api_Favourites);
    const data = await res.json();

    console.log('Favorites')
    console.log(data)

    if (res.status !==200) {
        spanError.innerHTML = "Hubo un error: " + res.status
    }
        
    }


loadRandomCat();
loadFavoriteCat();
