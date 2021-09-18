const getData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(`error ${response.status}`);
  }
} 


const postData = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const res_1 = await res.json();
    return console.log(res_1);
  } catch (error) {
    return console.log(error);
  }
}



export { getData, postData };
