(() => {
    let counter = 0;

    let intervalRef = setInterval(
        () => {
            console.log('Hello World', this);
            counter++;
            if(counter === 5) {
                console.log('Done');
                clearInterval(intervalRef);
            }
        },
        1000
    )
})();