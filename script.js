let jokeContainer = document.getElementById("jokes")
let jokeGenerator = document.getElementById("generator")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single"

jokeGenerator.addEventListener("click", () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`
    })
})