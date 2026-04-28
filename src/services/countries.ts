export function getCountries() {
  return fetch("https://countriesnow.space/api/v0.1/countries")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    })
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    })
    .catch((err) => {
      if (err instanceof Error) {
        throw new Error(`Error to get Countries: ${err.message}`);
      }
    });
}
