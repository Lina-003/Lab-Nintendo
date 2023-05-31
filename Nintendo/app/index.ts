import * as components from "./components/index.js";
// import "./components/index.js";
import MyHeader, { Attribute } from "./components/Header/Header.js";
import data1 from "./dataHeader.js";

class AppContainer extends HTMLElement {
    headers: MyHeader[] = [];

    constructor() {
        super();
        this.attachShadow({mode: "open"});

        data1.forEach((user) => {
            const headerCard = this.ownerDocument.createElement(
                "header"
                ) as MyHeader;
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
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/style.css"> `;

                const contentContainer = document.createElement("div");
                contentContainer.classList.add("content");

                this.headers.forEach((head)=>{
                    this.shadowRoot?.appendChild(head);    
                });

                //contentContainer.appendChild(suggested);
                this.shadowRoot?.appendChild(contentContainer);
            }
        }
    }

customElements.define("app-container", AppContainer);