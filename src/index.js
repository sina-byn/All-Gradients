// Importing Styles
import './index.scss';
import './tailwind.css';

// Importing Data
import GRADIENTS_DATA from './data/GradientsData';

// Importing Components
import GradientCard from './components/GradientCard';
import LoadMoreButton from './components/ui/LoadMoreButton';

// Importing Functions
import { scrollTop } from './helpers/functions';


window.onload = () => {
    GRADIENTS_DATA.slice(0, 10).forEach((gradient, idx) => {
        const gradinetCard = new GradientCard(idx, gradient, null ,false);
        gradinetCard.render();
    });
    const scrollTopButton = document.querySelector('.scroll-top-btn');
    scrollTopButton.onclick = scrollTop;
};

LoadMoreButton.render();