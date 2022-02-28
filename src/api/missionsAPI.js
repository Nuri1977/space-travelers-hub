const url = 'https://api.spacexdata.com/v3/missions';

const handleError = (response) => {
  if (!response.ok) {
    throw Error(response);
  } else {
    return response;
  }
}; // handler function that throws any encountered error

const fetchMissionsApi = () => {
  const resultFetch = fetch(url)
    .then(handleError) // skips to .catch if error is thrown
    .then((res) => res.json())
    .catch((error) => error); // catches the error and logs it

  return resultFetch;
};

export default fetchMissionsApi;
