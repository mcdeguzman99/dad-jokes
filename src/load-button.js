import { getJokes, renderJokes } from './jokes.js'
import { setJokes } from './store.js'

// Load more jokes button handler
export const loadMoreButtonHandler = async () => {
  const newJokes = await getJokes()
  setJokes(newJokes)
  renderJokes()
}
