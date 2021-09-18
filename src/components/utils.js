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


// const getFavorites = (body) => {
//   return fetch('https://strange-prompts-api.herokuapp.com/api/v1/favorites', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   })
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(error => console.log(error))
// }

export default getData;

// {
//   character: 2,
//   setting: 4,
//   problem: 7
// }