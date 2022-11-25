"use strict";




movies.splice(200);

const Allmovies = movies.map(el => {
    return {
        "title": el.title,
        "year": el.year,
        "categories": el.categories,
        "id":el.imdbId,
        "imdbRating": el.imdbRating,
        "runtime": `${Math.trunc(el.runtime / 60)}h, ${el.runtime % 60}m`,
        "lang": el.language,
        "youtubeId": `https://www.youtube.com/embed/${el.youtubeId}`,
        "summary": el.summary,
        "smallimg": el.smallThumbnail,
        "bigimg": el.bigThumbnail

    }
})
// console.log(Allmovies);

function AllmoviesRender() {
    Allmovies.forEach((el) => {
        const card = createElement('div', 'card shadow', `
        <img src="${el.smallimg}" alt="${el.title}"
        class="card-top-img">
        <div class="card-body">
            <h3 class="card-title">${el.title}</h3>
            <ul class="card-list p-0 list-unstyled">
                <li class="card-list-item"><strong>Year:</strong>${el.year}</li>
                <li class="card-list-item"><strong>Language:</strong>${el.lang}</li>
                <li class="card-list-item"><strong>Rayting:</strong>${el.imdbRating}</li>
                <li class="card-list-item"><strong>Category:</strong>${el.categories}</li>

            </ul>
           <div class="social d-flex">
            <a href="${el.youtubeId}" class="btn btn-danger mx-2">
                YouTube
            </a>
            <button class="btn btn-primary mx-2 data-more=${el.id}">
            Read more
            </button>
            <button class="btn btn-warning mx-2" data-save=${el.id}>
            save
            </button>

           </div>    
           
        </div>
        `);

        $('.wrapper').appendChild(card);
    });
}


AllmoviesRender()


console.log(Allmovies);

function categoryMovies() {
    const removeDublicate = [];
console.log("salom");
    Allmovies.forEach((el) => {
        el.categories.forEach((e) => {
            if (!removeDublicate.includes(e)) {
                console.log("object");
                removeDublicate.push(e);
                console.log(removeDublicate);
            }
        })
    })
    // console.log(removeDublicate);
    


    removeDublicate.sort();
    removeDublicate.unshift("All")
    removeDublicate.forEach((e) => {
        const option = createElement('option', 'item', e)
        $("#catagory").appendChild(option);


    })
    // removeDublicate()
}
categoryMovies();


const arrray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

arrray.forEach((el)=>{
    const div=document.createElement('div');
    div.dataset.idInfo=`key:${el}`;
}
)


$('#search').addEventListener("keyup",()=>{
    let inputValue=$('#search').value.trim();
    const regax=new RegExp(inputValue,"gi");
    console.log(regax);
    // console.log(pro.match(regax));
})