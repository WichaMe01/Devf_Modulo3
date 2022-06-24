console.log("Hola, gatos")

const api_Random ='https://api.thecatapi.com/v1/images/search?limit=5&api_key=00a52bc8-8a8e-45e1-b1bc-8ab8d4d29ee3'
const api_Favourites ='https://api.thecatapi.com/v1/favourites?limit=3&api_key=00a52bc8-8a8e-45e1-b1bc-8ab8d4d29ee3'

const spanError = document.getElementById('error')

async function loadRandomCat() {
        const res = await fetch(api_Random);
        const data = await res.json();
    console.log('Random')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status;
      } else {
        const img1 = document.getElementById('img1')
        const img2 = document.getElementById('img2')
        const img3 = document.getElementById('img3')
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
    


        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;

        btn1.onclick = () => saveFavouriteMichi(data[0].id);
        btn2.onclick = () => saveFavouriteMichi(data[1].id);
        btn3.onclick = () => saveFavouriteMichi(data[2].id);

      }}

async function loadFavouriteCat() {
        const res = await fetch(api_Favourites);
        const data = await res.json();

        console.log('Favorites')
        console.log(data)

        if (res.status !== 200) {
            spanError.innerHTML = "Hubo un error: " + res.status + data.message;
          } else {
            data.forEach(michi => {
              const section = document.getElementById('favoriteMichis')
              const col = document.createElement('card');
              const img = document.createElement('img');
              const btn = document.createElement('button');
              const btnText = document.createTextNode('Sacar al michi de favoritos');
        
              img.src = michi.image.url;
              img.width = 150;
              btn.appendChild(btnText);
              col.appendChild(img);
              col.appendChild(btn);
              section.appendChild(article);
            });

    }

async function saveFavouriteMichis() {
    //    const res = await fetch(API_URL_FAVOTITES); {
    //     method: 'POST',
    //     headers: {
    //        'Content-Type': 'application/json',
    //      },
    //      body: JSON.stringify({
    //        image_id: 'dje'
    //      }),
    //     });
    //     const data = await res.json();
    //       console.log('Save')
    //       console.log(res)
          
    //         if (res.status !== 200) {
    //           spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    //         }
             
        }


//     loadRandomCat();
//   //  loadFavoriteCat();