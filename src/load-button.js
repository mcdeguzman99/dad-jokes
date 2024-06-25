import { jokes } from './index.js'

// Load more jokes button handler
export const loadMoreButtonHandler = async () => {
  await jokes.getJokes()
  jokes.renderJokes()
}
