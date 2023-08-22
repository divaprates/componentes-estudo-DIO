class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<H1>Hello World</H1>"
    }
}

customElements.define('card-news', CardNews);