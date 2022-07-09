// Importing Components
import GradientCardData from "../GradientCardData";
import ToastNotification from "./ToastNotification";

// Importing Functions
import {
    setCustomGradient
} from '../../helpers/functions';

class StopColorInput {
    defColor = "";
    siblingElem = "";

    constructor(defColor, siblingElem) {
        this.defColor = defColor;
        this.siblingElem = siblingElem;
    }

    inputHandler(e) {
        const targetInp = e.target;
        targetInp.parentElement.style.backgroundColor = e.target.value;
        targetInp.parentElement.nextSibling.innerText = e.target.value;

        setCustomGradient(GradientCardData);
    }

    copyHandler(e) {
        navigator.clipboard.writeText(e.target.innerText).then(() => {
            const toastNotif = new ToastNotification("Color Copied to Clipboard =)");
            toastNotif.render();
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        const customStopColorsContainer = document.querySelector('.custom-gradient-section .container');
        const wrapper = document.createElement('div');
        const colorDisp = document.createElement('div');
        const colorInp = document.createElement('input');
        const colorValueDisp = document.createElement('p');

        wrapper.className = "flex flex-col items-center gap-y-2 w-full";
        colorDisp.className = "chosen-color-disp w-12 aspect-square rounded-lg bg-black overflow-hidden";

        colorInp.className = "w-full h-full opacity-0 cursor-pointer";
        colorInp.setAttribute('type', 'color');
        colorInp.oninput = this.inputHandler;

        colorValueDisp.className = "w-full max-w-[100px] bg-cyan-400 bg-opacity-25 text-sm text-center rounded-md px-2 pt-[9px] pb-[6px] cursor-pointer";
        colorValueDisp.innerText = colorInp.value;
        colorValueDisp.onclick = this.copyHandler;

        colorDisp.appendChild(colorInp);
        wrapper.appendChild(colorDisp);
        wrapper.appendChild(colorValueDisp);

        if (this.defColor) {
            colorDisp.style.backgroundColor = this.defColor;
            colorInp.value = this.defColor;
        }

        if (this.siblingElem) {
            customStopColorsContainer.insertBefore(wrapper, this.siblingElem);
        } else {
            customStopColorsContainer.appendChild(wrapper);
        }
    }
}

export default StopColorInput;