const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status)
      }
    })
} 

export default getData;