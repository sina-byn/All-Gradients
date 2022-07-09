// Importing Functions
import { waitBeforeInit } from "../../helpers/functions";

class ToastNotification {
    message = "";

    constructor(message) {
        this.message = message;
    }

    removeNotif(notif) {
        notif.remove();
    }

    render() {
        const toastNotifContainer = document.querySelector('.toast-notif-container');
        const toastNotif = document.createElement('div');

        toastNotif.className = "toast-notif fade-out flex bg-custom-gradient rounded-lg shadow-lg px-4 py-3";
        toastNotif.innerText = this.message;

        waitBeforeInit(() => this.removeNotif(toastNotif), 1500);

        toastNotifContainer.appendChild(toastNotif);
    }
}

export default ToastNotification;