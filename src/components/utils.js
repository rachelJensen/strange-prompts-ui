const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`error ${response.status}`)
      }
    })
} 


const postData = (url, body) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.log(error))
}



export { getData, postData };
