class Split {
    constructor(title) {
        this.title = title;
    }

    createTitleForSplit() {
        const splitTitle = document.createElement("h3");
        splitTitle.id = "split-title";
        splitTitle.innerHTML = this.title;
        return splitTitle;
    }

    appendSplit() {
        const splitTitle = this.createTitleForSplit();
        document.parentElement.appendChild(splitTitle);
        return this;
    }

}