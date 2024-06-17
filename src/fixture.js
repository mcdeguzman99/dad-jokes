export const jokesFixture = {
  data: {
    current_page: 1,
    limit: 10,
    next_page: 2,
    previous_page: 1,
    results: [
      {
        id: '0189hNRf2g',
        joke: "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
      },
      {
        id: '08EQZ8EQukb',
        joke: "Did you hear about the guy whose whole left side was cut off? He's all right now.",
      },
      {
        id: '08xHQCdx5Ed',
        joke: 'Why didn’t the skeleton cross the road? Because he had no guts.',
      },
      {
        id: '0DQKB51oGlb',
        joke: "What did one nut say as he chased another nut?  I'm a cashew!",
      },
      {
        id: '0DdFQZgyXnb',
        joke: 'Where do fish keep their money? In the riverbank',
      },
      {
        id: '0DdaxAX0orc',
        joke: 'I accidentally took my cats meds last night. Don’t ask meow.',
      },
      {
        id: '0DtrrOZDlyd',
        joke: "Chances are if you' ve seen one shopping center, you've seen a mall.",
      },
      {
        id: '0L6MexPukjb',
        joke: 'Dermatologists are always in a hurry. They spend all day making rash decisions. ',
      },
      {
        id: '0LuXvkq4Muc',
        joke: "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.",
      },
      {
        id: '0gFdFBsWDd',
        joke: 'I won an argument with a weather forecaster once. His logic was cloudy...',
      },
    ],
    search_term: '',
    status: 200,
    total_jokes: 744,
    total_pages: 75,
  },
  status: 200,
  statusText: '',
  headers: {
    'cache-control':
      'max-age=0, must-revalidate, no-cache, no-store, public, s-maxage=0',
    'content-type': 'application/json',
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter: ['xhr', 'http', 'fetch'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json',
    },
    method: 'get',
    url: 'https://icanhazdadjoke.com/search?limit=10',
  },
  request: {},
}
