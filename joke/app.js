const jokeContainer = document.querySelector('p')

const btn = document.querySelector('button')
 
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

let getJoke = function () {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = item.joke
        })
}

getJoke()

btn.addEventListener('click', getJoke)