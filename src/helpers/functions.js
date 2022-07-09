const waitBeforeInit = (callback, delay) => {
    const timeout = setTimeout(() => {
        callback();
        clearTimeout(timeout);
    }, delay);
};

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

export { waitBeforeInit, scrollTop };