(() => {
  let count = 0;
  let intervalRef = null;
  const delayFunc = delay => {
    intervalRef = setInterval(() => {
      console.log("Hello World", delay * 100);
      if (++count % 5 === 0) {
        clearInterval(intervalRef);
        delayFunc(++delay);
      }
    }, delay * 100);
  };
  delayFunc(1);
})();
