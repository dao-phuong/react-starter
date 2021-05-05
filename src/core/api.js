function parseJSON(response) {
  return new Promise(resolve => (
    response.status === 204 ? (
      resolve({ status: response.status, ok: response.ok })
    ) : (
      response.json().then(json => resolve({ status: response.status, ok: response.ok, json }))
    )
  ));
}

export function request(payload){
  return new Promise((resolve, reject) => {
    fetch(payload.url, {
        method: payload.method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: requestHeader(),
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(payload.body)
    })
      .then(parseJSON)
      .then((response) => response.ok ? resolve(response.json) : reject(response.json))
      .catch(error => reject(error));
  });
}