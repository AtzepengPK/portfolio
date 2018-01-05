export class DetailSection {

    constructor(
        private order: number,
        private content: string,
        private configuration: DetailSectionConfig = new DetailSectionConfig()) {
    }

}

export class DetailSectionConfig {
    private detailClassName;

    constructor(detailClassName: string = 'detail') {
        this.detailClassName = detailClassName;
    }

}
