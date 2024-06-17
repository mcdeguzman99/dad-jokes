import { getJokes, renderJokes } from './jokes.js'
import { loadMoreButtonHandler } from './load-button.js'
import { currentPage, jokes, setJokes } from './store.js'

// Render initial ten jokes
if (jokes.length === 0) {
  const newJokes = await getJokes(currentPage)
  setJokes(newJokes)
  renderJokes()
}

// Attach event listener to 'load more' button
const loadMoreButton = document.getElementById('load-more-button')
loadMoreButton.addEventListener('click', loadMoreButtonHandler)
