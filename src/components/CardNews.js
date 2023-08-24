class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build);
        shadow.appendChild(this.styles);
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const newsImage = document.createElement("img");

        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    styles() {

    }
}

customElements.define('card-news', CardNews);