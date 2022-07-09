const waitBeforeInit = (callback, wait) => {
    const timeout = setTimeout(() => {
        callback();
        clearTimeout(timeout);
    });
};

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const setCustomGradient = (CardDataComponent) => {
    const customGradientCard = document.querySelector('.card-custom');
    const cardStyleTag = document.querySelector('.custom-gradient-styles');
    const colorInputs = document.querySelectorAll("input[type='color']");
    const len = colorInputs.length;
    const colors = [];

    let bgGradient = "background: linear-gradient(to bottom right, ";

    colorInputs.forEach((inp, idx) => {
        if (idx === len - 1) {
            bgGradient += inp.value + ");";
        } else {
            bgGradient += inp.value + ", ";
        }

        colors.push(inp.value);
    });

    const webkitBgGradient = bgGradient.replace(" ", " -webkit-");
    const bgColor = "background: " + colors[0] + ";";

    cardStyleTag.innerHTML = `
    .card-custom {
        ${bgColor}
        ${webkitBgGradient}
        ${bgGradient}
    }
    `;

    customGradientCard.innerHTML = ``;
    const newGradientData = new CardDataComponent('custom', colors);
    newGradientData.render();
};

export {
    setCustomGradient,
    waitBeforeInit,
    scrollTop,
};