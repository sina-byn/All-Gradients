// Importing Components
import GradientCardData from "./GradientCardData";

class GradientCard {
    id = "";
    gradientData = "";
    parentElem = "";
    hasSeparateStyles = "";

    constructor(id, gradientData, parentElem, hasSeparateStyles) {
        this.id = id;
        this.gradientData = Object.values(gradientData);
        this.parentElem = parentElem;
        this.hasSeparateStyles = hasSeparateStyles;
    }

    setGradient() {
        let bgGradient = 'background: linear-gradient(to bottom right, ';

        this.gradientData.forEach((color, idx) => {
            if (idx !== this.gradientData.length - 1) {
                bgGradient += `${color}, `;
            } else {
                bgGradient += `${color});`;
            }
        });

        const webkitBgGradient = bgGradient.replace(" ", " -webkit-");
        const bgColor = `background-color: ${this.gradientData[0]};`;

        return `
            ${bgColor}
            ${webkitBgGradient}
            ${bgGradient}
        `;
    }

    render() {
        const cardsContainer = document.querySelector('.cards-container');
        const loadMoreButton = document.querySelector('.load-more-btn-container');
        const card = document.createElement('div');
        const cardStyleTag = document.querySelector('.gradients-styles');
        const cardData = new GradientCardData(this.id, this.gradientData, this.setGradient());

        card.className = `card-${this.id} w-full aspect-square relative rounded-2xl overflow-hidden shadow-xl`;

        if (!this.hasSeparateStyles) {
            cardStyleTag.innerHTML += `
            .card-${this.id} {${this.setGradient()}}
            `;
        } else {
            card.classList.replace('w-full', 'w-[calc(100%_-_20px)]');
            const customStyleTag = document.querySelector('.custom-gradient-styles');
            customStyleTag.innerHTML = `
            .card-${this.id} {${this.setGradient()}}
            `;
        }

        if (!loadMoreButton && !this.parentElem) {
            cardsContainer.appendChild(card);
        } else if (loadMoreButton && !this.parentElem) {
            cardsContainer.insertBefore(card, loadMoreButton);
        } else {
            this.parentElem.appendChild(card);
        }

        cardData.render();
    }
}

export default GradientCard;