export let currentPage = 0
export let jokes = []

export const incrementCurrentPage = () => {
  currentPage = currentPage + 1
}

export const setJokes = (newJokes) => {
  jokes = newJokes
}
