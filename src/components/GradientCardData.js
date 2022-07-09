// Importing Components
import ToastNotification from "./ui/ToastNotification";

class GradientCardData {
    id = "";
    gradientData = "";
    gradientCode = "";

    constructor(id, gradientData, gradientCode) {
        this.id = id;
        this.gradientData = gradientData;
        this.gradientCode = gradientCode;
    }

    setGradientData(parentElem) {
        this.gradientData.forEach(color => {
            const colorDisp = document.createElement('p');
            colorDisp.className = "w-[100px] text-center tracking-wide rounded-lg border-2 border-gray-200 pt-[7px] pb-[5px] cursor-pointer hover:bg-gray-200/25 active:scale-95";
            colorDisp.innerText = color;
            colorDisp.onclick = this.colorCopyHandler;
            parentElem.appendChild(colorDisp);
        });
    }

    colorCopyHandler(e) {
        navigator.clipboard.writeText(e.target.innerText).then(() => {
            const toastNotif = new ToastNotification("Color Copied to Clipboard =)");
            toastNotif.render();
        }).catch(err => console.error(err));
    }

    gradinetCopyHandler(gradientCode) {
        navigator.clipboard.writeText(gradientCode).then(() => {
            const toastNotif = new ToastNotification("Gradient Copied to Clipboard =)");
            toastNotif.render();
        }).catch(err => console.error(err));
    }

    render() {
        const parentCard = document.querySelector(`.card-${this.id}`);
        const cardDataWrap = document.createElement('div');
        const cardData = document.createElement('div');
        const btnWrap = document.createElement('div');

        cardDataWrap.className = "card-data-wrap flex items-center justify-center w-full h-full absolute bg-black/60 opacity-0 transition-all duration-300 py-10 hover:opacity-100";
        cardData.className = "card-data flex flex-col gap-y-2 items-center justify-center w-full h-full relative text-[13px] text-gray-200 overflow-y-auto";

        this.setGradientData(cardData);

        btnWrap.className = "absolute h-7 right-6 top-6 z-10";
        btnWrap.onclick = () => this.gradinetCopyHandler(this.gradientCode);
        btnWrap.innerHTML = `
            <svg class="copy-btn h-full fill-white cursor-pointer hover:scale-110 active:scale-95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM272 224h-160C103.2 224 96 216.8 96 208C96 199.2 103.2 192 112 192h160C280.8 192 288 199.2 288 208S280.8 224 272 224z"/>
            </svg>
        `;

        cardDataWrap.appendChild(cardData);
        cardDataWrap.appendChild(btnWrap);
        parentCard.appendChild(cardDataWrap);
    }
}

export default GradientCardData;