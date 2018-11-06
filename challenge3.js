(() => {
    const delayFunc = (delay) => setTimeout(() => {
        console.log(`Executing after ${delay} second(s)`);
        delayFunc(delay);
    }, ++delay * 1000);

    delayFunc(0);
    
})();