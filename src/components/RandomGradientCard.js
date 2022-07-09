class RandomGradientCard {
    static randomStop_1 = "";
    static randomStop_2 = "";
    static gradientCode = `
        background-color: #dc4887;
        background: -webkit-linear-gradient(to bottom right, #dc4887, #5b36e8);
        background: linear-gradient(to bottom right, #dc4887, #5b36e8);
    `;

    constructor(randomStop_1, randomStop_2, gradientCode) {
        this.randomStop_1 = randomStop_1;
        this.randomStop_2 = randomStop_2;
        this.gradientCode = gradientCode;
    }

    static generateRandomGradient(styleTag) {
        const randomStop_1 = Math.floor(Math.random() * 16777215).toString(16);
        const randomStop_2 = Math.floor(Math.random() * 16777215).toString(16);

        this.randomStop_1 = randomStop_1;
        this.randomStop_2 = randomStop_2;
        this.gradientCode = `
            background-color: #${randomStop_1};
            background: -webkit-linear-gradient(to bottom right, #${randomStop_1}, #${randomStop_2});
            background: linear-gradient(to bottom right, #${randomStop_1}, #${randomStop_2});
        `;

        styleTag.innerHTML = `
        .card-random {${this.gradientCode}}
        `;
    }

    static gradientCopyHandler() {
        navigator.clipboard.writeText(this.gradientCode).then(() => {

        }).catch(err => console.error(err));
    }

    static render() {
        const cardsContainer = document.querySelector('.cards-container');
        const card = document.createElement('div');
        const cardStyleTag = document.querySelector('.random-gradient-styles');
        const regenerateBtn = document.createElement('button');
        const copyBtn = document.createElement('button');
        const defBgGradient = `
            background-color: #dc4887;
            background: -webkit-linear-gradient(to bottom right, #dc4887, #5b36e8);
            background: linear-gradient(to bottom right, #dc4887, #5b36e8);
        `;

        card.className = "card-random flex flex-col items-center justify-center w-full aspect-square relative rounded-2xl overflow-hidden shadow-xl";

        regenerateBtn.className = "regenerate-button text-gray-200 border-2 rounded-lg px-6 py-2 transition-all duration-300 hover:bg-gray-100/50 hover:text-gray-900 active:scale-95";
        regenerateBtn.setAttribute('type', 'button');
        regenerateBtn.innerText = "random gradient";

        copyBtn.className = "absolute h-7 right-6 top-6";
        copyBtn.setAttribute('type', 'button');
        copyBtn.innerHTML = `
            <svg class="copy-btn h-full fill-white cursor-pointer hover:scale-110 active:scale-95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM272 224h-160C103.2 224 96 216.8 96 208C96 199.2 103.2 192 112 192h160C280.8 192 288 199.2 288 208S280.8 224 272 224z"/>
            </svg>
        `;

        cardStyleTag.innerHTML = `
        .card-random {${defBgGradient}}
        `;

        regenerateBtn.onclick = () => this.generateRandomGradient(cardStyleTag);
        copyBtn.onclick = () => this.gradientCopyHandler();

        card.appendChild(copyBtn);
        card.appendChild(regenerateBtn);
        cardsContainer.appendChild(card);
    }
}

export default RandomGradientCard;