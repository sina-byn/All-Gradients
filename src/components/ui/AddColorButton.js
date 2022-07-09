// Importing Components
import GradientCardData from "../GradientCardData";
import StopColorInput from "./StopColorInput";

// Importing Functions
import { setCustomGradient } from '../../helpers/functions';

class AddStopColorButton {
    static addHandler(siblingElem) {
        const newStopInp = new StopColorInput('#000000', siblingElem);
        newStopInp.render();

        setCustomGradient(GradientCardData);
    }

    static render() {
        const customStopColorsContainer = document.querySelector('.custom-gradient-section .container');
        const wrapper = document.createElement('div');
        const addBtn = document.createElement('button');
        const buttonText = document.createElement('p');

        wrapper.className = "flex flex-col items-center gap-y-2 w-full";

        addBtn.setAttribute('type', 'button');
        addBtn.className = "w-12 aspect-square text-2xl border-2 border-gray-900 rounded-lg";
        addBtn.innerText = "+";
        addBtn.onclick = () => this.addHandler(wrapper);

        buttonText.className = "w-full max-w-[100px] bg-cyan-400 bg-opacity-25 text-sm text-center rounded-md px-2 pt-[9px] pb-[6px] cursor-pointer";
        buttonText.innerText = "Add Stop";
        buttonText.onclick = () => this.addHandler(wrapper);

        wrapper.appendChild(addBtn);
        wrapper.appendChild(buttonText);
        customStopColorsContainer.appendChild(wrapper);
    }
}

export default AddStopColorButton;