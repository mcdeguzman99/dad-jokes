import axios from 'axios'

const API_BASE_URL = 'https://icanhazdadjoke.com'

const config = {
  headers: {
    Accept: 'application/json',
  },
}

export class Jokes {
  constructor() {
    this.currentPage = 0
    this.jokes = []
  }

  getJokes = async () => {
    this.currentPage = this.currentPage + 1

    try {
      const jokesData = await axios.get(
        `${API_BASE_URL}/search?page=${this.currentPage}&limit=10`,
        config
      )
      this.jokes = jokesData.data.results
    } catch (error) {
      console.log('Unexpected error occurred calling the Dad Jokes API', error)
    }
  }

  renderJokes = () => {
    const resultsNode = document.getElementById('jokes')
    resultsNode.innerHTML = ''

    this.jokes.map(({ joke }) => {
      resultsNode.innerHTML += `
        <li>
          <p>${joke}</p>
        </li>
      `
    })
  }

  loadMoreHandler = async () => {
    await this.getJokes()
    this.renderJokes()
  }

  updateSearchResults = (event) => {
    const searchTerm = event.target.value
    let searchResultsNode = document.getElementById('results')

    searchResultsNode.innerText = ''
    this.jokes.map(({ joke }) => {
      if (joke.includes(searchTerm)) {
        searchResultsNode.innerHTML += `
          <li>
            <p>${joke}</p>
          </li>
        `
      }
    })
  }
}
