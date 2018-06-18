const baseUrl = "https://m-tracker-app.herokuapp.com/api/v2";

export const get = (endpoint, token) => {
  return fetch(`${baseUrl}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    }
  }).then(res => res.json());
};
