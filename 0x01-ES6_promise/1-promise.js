function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({
                status: 200,
                body: "Success"
            });
        } else {
            reject("The fake Api is not working currently");
        }
    });
}

export default getFullResponseFromAPI;

