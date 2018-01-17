const resultText = $("#result-text")
const resultImages = $("#result-images")
const buttonSearch = $("#button-search")

// -----------------------------------------------------------------------------

const API_KEY = `2fb232bdf77904152da9e4768a696c43`
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`
const IMAGE_PREFIX = `https://image.tmdb.org/t/p/w300`

// -----------------------------------------------------------------------------

const cleanResultImages = () => {
  resultImages.empty()
}

// -----------------------------------------------------------------------------

const searchMovie = (event) => {
  event.preventDefault()
  cleanResultImages()

  const inputMovieTitle = $("#input-movie-title").val()

  fetch(URL + inputMovieTitle).then(response => response.json()).then(data => {
    data.results.map(movie => {
      const movieImageURL = movie.poster_path
        ? IMAGE_PREFIX + movie.poster_path
        : "http://via.placeholder.com/160x240"
      const movieTitle = movie.title
      const movieOverview = movie.overview.substring(0, 140)
      const movieTitleSlug = movie.title.toLowerCase().replace(" ", "-")

      let movieCard = `
        <div class="col">
          <div class="card">
            <img class="card-img-top" src="${movieImageURL}" alt="${movieTitle}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movieOverview}...
                <a href="./${movieTitleSlug}.html">Read more</a>
</p>
            </div>
          </div>
        </div>
        `

      resultImages.append(movieCard)
    })
  });
}

// -----------------------------------------------------------------------------

buttonSearch.on("click", searchMovie)
