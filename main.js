"use strict";
movies.splice(7000)

const Allmovies = movies.map(el => {
    return {
        "title": el.title,
        "year": el.year,
        "categories": el.categories,
        "imdbId": "tt7026230",
        "imdbRating": el.imdbRating,
        "runtime": `${Math.trunc(el.runtime/60)}h, ${el.runtime%60}m`,
        "lang": el.language,
        "youtubeId": `https://www.youtube.com/embed/${el.youtubeId}`,
        "summary": el.summary,
        "smallimg": el.smallThumbnail,
        "bigimg": el.bigThumbnail

    }
})
console.log(Allmovies);

function AllmoviesRender() {
    Allmovies.forEach(el => {
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
            <a href="${el.youtube}" class="btn btn-danger">
                YouTube
            </a>
            <button class="btn btn-primary mx-2">Read more</button>
            <button class="btn btn-warning mx-2">save</button>

           </div>    
           
        </div>
        `);

        $('.wrapper').appendChild(card);
    });
}


AllmoviesRender()




function categoryMovies(){
    // const category[];
    Allmovies.forEach((el)=>{
        el.category.forEach((e)=>{
           if(category.includes(e)){
            category.push(e)
           }
        })
    })
}