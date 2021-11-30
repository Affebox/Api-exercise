const SEARCHAPI ="http://www.omdbapi.com/?apikey=132fc1f5&";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getContent = async (url) => {
    let resp = await fetch(url);
    resp = await resp.json();

    showContent(resp.Search);
};

function showContent(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <img
            src="${movie.Poster}"
            alt="${movie.Title}"/>
        <div class="movie-info">
            <h3>${movie.Title} (${movie.Year})</h3>
        <div>`;
        main.appendChild(movieEl);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = '&s=' + search.value;

    if (searchTerm) {
        getContent(SEARCHAPI + searchTerm);
        search.value = "";
    }
});
