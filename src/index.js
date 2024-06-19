import { Jokes } from './jokes.js'

const jokes = new Jokes()

// Render initial ten jokes
if (jokes.currentPage === 0) {
  await jokes.getJokes()
  jokes.renderJokes()
}

// Attach event listener to 'load more' button
const loadMoreButton = document.getElementById('load-more-button')
loadMoreButton.addEventListener('click', jokes.loadMoreHandler)

// Search bar functionality
const input = document.getElementById('search-bar')
input.addEventListener('input', jokes.updateSearchResults)
