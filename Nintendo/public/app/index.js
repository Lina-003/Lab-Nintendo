// import "./components/index.js";
import { Attribute } from "./components/Header/Header.js";
import data1 from "./dataHeader.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.headers = [];
        this.attachShadow({ mode: "open" });
        data1.forEach((user) => {
            const headerCard = this.ownerDocument.createElement("header");
            headerCard.setAttribute(Attribute.logoimg, user.logoimg);
            headerCard.setAttribute(Attribute.lupaimg, user.lupaimg);
            headerCard.setAttribute(Attribute.interruptorimg, user.interruptorimg);
            this.headers.push(headerCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/style.css"> `;
            const contentContainer = document.createElement("div");
            contentContainer.classList.add("content");
            this.headers.forEach((head) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(head);
            });
            //contentContainer.appendChild(suggested);
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(contentContainer);
        }
    }
}
customElements.define("app-container", AppContainer);
