// Importing Data
import GRADIENTS_DATA from "../../data/GradientsData";

// Importing Components
import GradientCard from "../GradientCard";
import Loader from "./Loader";

// Importing Functions
import { waitBeforeInit } from '../../helpers/functions';

class LoadMoreButton {
    static shownGradientsCount = +sessionStorage.getItem('viewed-length') || 10;

    static loadHandler(parentElem, altButton) {
        const loader = new Loader(parentElem);

        parentElem.innerHTML = "";
        loader.render();
        waitBeforeInit(() => this.hideLoader(parentElem, altButton), 1000);
    }
    
    static hideLoader(parentElem, altButton) {
        this.loadMore(GRADIENTS_DATA, this.shownGradientsCount);
        parentElem.innerHTML = "";
        parentElem.appendChild(altButton);
    }

    static loadMore(data, shownCount) {
        let newGradients = [];
        const len = data.length;
        const loadMoreButton = document.querySelector('.load-more-btn-container');

        if (len - shownCount >= 10) {
            newGradients = data.slice(shownCount, shownCount + 10);
            this.shownGradientsCount = shownCount + 10;
        } else {
            newGradients = data.slice(shownCount);
            this.shownGradientsCount = data.length;
        }

        (this.shownGradientsCount === len) ? loadMoreButton.remove() : null;

        sessionStorage.setItem('viewed-length', this.shownGradientsCount);

        newGradients.forEach((gradient, idx) => {
            const gradientCard = new GradientCard(shownCount + idx, gradient, null, false);
            gradientCard.render();
        });
    }

    static render() {
        const cardsContainer = document.querySelector('.cards-container');
        const btnContainer = document.createElement('div');
        const loadMoreButton = document.createElement('button');

        loadMoreButton.setAttribute('type', 'button');
        loadMoreButton.innerHTML = `
            <p class="text-base text-gray-200 border-2 border-gray-200 rounded-lg px-6 py-2 transition-all duration-300 hover:bg-gray-100/50 hover:text-gray-900 active:scale-95">
                Load More
            </p>
        `;

        btnContainer.className = "load-more-btn-container flex items-center justify-center w-full aspect-square bg-gradient-to-br from-[#ee55e5] to-[#57afd1] text-lg rounded-2xl";

        loadMoreButton.onclick = () => this.loadHandler(btnContainer, loadMoreButton);

        btnContainer.appendChild(loadMoreButton);
        cardsContainer.appendChild(btnContainer);
    }
}

export default LoadMoreButton;