const waitBeforeInit = (callback, delay) => {
    const timeout = setTimeout(() => {
        callback();
        clearTimeout(timeout);
    }, delay);
};

export { waitBeforeInit };