async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    }
}







async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched data from API");
        }, 2000);
    });
}

async function awaitCall() {
    const data = await fetchData();
    console.log(data);
}







async function chainedAsyncFunctions() {
    await awaitCall();
    await awaitCall();
    await awaitCall();
}


iterateWithAsyncAwait([1, 2, 3, 4, 5]);
awaitCall();
chainedAsyncFunctions();