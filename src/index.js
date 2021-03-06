// Importing Styles
import './index.scss';
import './tailwind.css';

// Importing Data
import GRADIENTS_DATA from './data/GradientsData';

// Importing Components
import GradientCard from './components/GradientCard';
import RandomGradientCard from './components/RandomGradientCard';
import LoadMoreButton from './components/ui/LoadMoreButton';
import AddStopColorButton from './components/ui/AddColorButton';
import StopColorInput from './components/ui/StopColorInput';

// Importing Functions
import { scrollTop } from './helpers/functions';


window.onload = () => {
    const viewedLength = +sessionStorage.getItem('viewed-length');
    const gradientsCountDisp = document.querySelector('.gradients-count-disp');
    const scrollTopButton = document.querySelector('.scroll-top-btn');
    
    gradientsCountDisp.innerHTML = `
        <span class="text-orange-500 font-bold">Gradients Count : </span>${GRADIENTS_DATA.length} Gradients
    `;

    RandomGradientCard.render();

    GRADIENTS_DATA.slice(0, viewedLength || 10).forEach((gradient, idx) => {
        const gradinetCard = new GradientCard(idx, gradient, null, false);
        gradinetCard.render();
    });
    scrollTopButton.onclick = scrollTop;

    if (viewedLength !== GRADIENTS_DATA.length) {
        LoadMoreButton.render();
    }

    const customGradientCard = new GradientCard('custom', {
        stop_1: '#000000',
        stop_2: '#ffffff',
    }, document.querySelector('.custom-gradient-container'), true);
    const stopColorInp_1 = new StopColorInput('#000000');
    const stopColorInp_2 = new StopColorInput('#ffffff');

    customGradientCard.render();
    stopColorInp_1.render();
    stopColorInp_2.render();
    AddStopColorButton.render();

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1200) {
            scrollTopButton.style.display = "flex";
        } else {
            scrollTopButton.style.display = "none";
        }
    });
};