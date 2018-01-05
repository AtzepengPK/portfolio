export class DetailSection {

    constructor(
        private order: number,
        private content: string,
        private configuration: DetailSectionConfig = new DetailSectionConfig()) {
    }

}

export class DetailSectionConfig {
    private className;

    constructor(className: string = 'detailSection') {
        this.className = className;
    }

}
