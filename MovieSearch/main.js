const key = "2e4f1986"
searchs = document.getElementById("searchs")
function search() {
    let name = document.getElementById("input").value
    fetch("https://www.omdbapi.com/?apikey=" + key + "&s=" + name)
        .then(response => response.json())
        .then(data => {
            let output = document.getElementById("output")
            output.innerHTML = ""
            if (data.Search) {
                data.Search.forEach(movie => {
                    output.innerHTML +=
                        "<div class='movie'>" +
                        "<img src='" + movie.Poster + "' alt='Poster (missing)' width='200' height='300'>" +
                        "<p>" + movie.Title + " (" + movie.Year + ")</p>" +
                        "</div>"
                });
            } else {
                output.innerHTML = "<p>No movies found.</p>"
            }
        })
}
searchs.addEventListener("click", search)