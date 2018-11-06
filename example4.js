const timerRef = setTimeout(() => {
    console.log("This will never print");
});

clearTimeout(timerRef);