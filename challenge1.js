const oneTimeFunc = delay => {
    console.log(`This executes after ${delay} seconds`);
}

setTimeout(oneTimeFunc, 400, "0.4");
setTimeout(oneTimeFunc, 1400, "1.4");

