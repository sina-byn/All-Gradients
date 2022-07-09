class Loader {
    parentElem = "";

    constructor(parentElem) {
        this.parentElem = parentElem;
    }

    render() {
        const loader = document.createElement('div');
        loader.className = "w-12 h-12 bg-transparent border-[7px] border-black/70 rounded-full animate-spin";
        loader.style.borderTopColor = "rgba(255, 255, 255, 0.5)";

        this.parentElem.appendChild(loader);
    }
}

export default Loader;