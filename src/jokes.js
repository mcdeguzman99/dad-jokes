import axios from 'axios'
import { incrementCurrentPage, currentPage, jokes } from './store.js'

const API_BASE_URL = 'https://icanhazdadjoke.com'

const config = {
  headers: {
    Accept: 'application/json',
  },
}

export const getJokes = async () => {
  incrementCurrentPage()
  try {
    const jokesData = await axios.get(
      `${API_BASE_URL}/search?page=${currentPage}&limit=10`,
      config
    )

    return jokesData.data.results
    // return jokesFixture.data.results
  } catch (error) {
    console.log('Unexpected error occurred calling the Dad Jokes API', error)
  }
}

export const renderJokes = () => {
  const resultsNode = document.getElementById('jokes')
  resultsNode.innerHTML = ''

  jokes.map(({ joke }) => {
    resultsNode.innerHTML += `
      <li>
        <p>${joke}</p>
      </li>
    `
  })
}
