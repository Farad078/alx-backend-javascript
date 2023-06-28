const handleResponseFromAPI = require('./2-then');
// import handleResponseFromAPI from './2-then';

test("test case", () => {
    const promise = Promise.resolve();
    const result = handleResponseFromAPI(promise);

    expect(result).toBe("Got a response from the API");
})