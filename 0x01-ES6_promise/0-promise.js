// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Make API request or perform any asynchronous operation here
    resolve("API response")
  });
}

export default getResponseFromAPI;
