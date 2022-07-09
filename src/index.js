// Importing Styles
import './index.scss';
import './tailwind.css';

// Importing Data
import GRADIENTS_DATA from './data/GradientsData';

// Importing Components
import GradientCard from './components/GradientCard';

GRADIENTS_DATA.forEach((gradient, idx) => {
    const gradinetCard = new GradientCard(idx, gradient, null ,false);
    gradinetCard.render();
});