// Importing Styles
import './index.scss';
import './tailwind.css';

// Importing Data
import GRADIENTS_DATA from './data/GradientsData';

// Importing Components
import GradientCard from './components/GradientCard';
import RandomGradientCard from './components/RandomGradientCard';
import LoadMoreButton from './components/ui/LoadMoreButton';

// Importing Functions
import { scrollTop } from './helpers/functions';


window.onload = () => {
    const viewedLength = +sessionStorage.getItem('viewed-length');

    RandomGradientCard.render();

    GRADIENTS_DATA.slice(0, viewedLength || 10).forEach((gradient, idx) => {
        const gradinetCard = new GradientCard(idx, gradient, null);
        gradinetCard.render();
    });
    const scrollTopButton = document.querySelector('.scroll-top-btn');
    scrollTopButton.onclick = scrollTop;

    if (viewedLength !== GRADIENTS_DATA.length) {
        LoadMoreButton.render();
    }
};