const payload = {
  country: "United States",
};
export function getState() {
  const stateData = fetch(
    "https://countriesnow.space/api/v0.1/countries/states",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload),
    },
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
