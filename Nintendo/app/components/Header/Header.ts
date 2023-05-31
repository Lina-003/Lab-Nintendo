export enum Attribute {
    "logoimg" = "logoimg",
    "lupaimg" = "lupaimg",
    "interruptorimg" = "interruptorimg",
    "heartimg" = "heartimg"
}

class MyHeader extends HTMLElement {
    logoimg?: string;
    lupaimg?: string;
    interruptorimg?: string;
    heartimg?: string;

    static get observedAttibutes() {
        const attrs: Record<Attribute, null> = {
            logoimg: null,
            lupaimg: null,
            interruptorimg: null,
            heartimg: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute, 
        _: string | undefined,
        newValue: string | undefined,
        ) {
           
            this[propName] = newValue;
            this.render();
        }

        render() {
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/Header/header.css"> 
                <section>
                       
                    <img src=${this.logoimg} height = "50np"></img>
                    <img src=${this.heartimg} height = "50np"></img> 
                    <img src=${this.lupaimg} height = "50np"></img>
                    <input type="text" placeholder="Search games...">

                    <div>
                        <img src=${this.interruptorimg} height = "50np"></img>
                    </div>
            </section>
            `;
        }
    }
}

customElements.define("my-header", MyHeader);
export default MyHeader;