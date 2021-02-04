export const apiGet = (url, apiKey) => {
  const proxy = 'https://cors-anywhere.herokuapp.com'
  return fetch(`${proxy}/${url}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json, application/x-www-form-urlencoded',
      'Accept-Language': 'en-US'
    }
  }).then((v) => v.json())
}
