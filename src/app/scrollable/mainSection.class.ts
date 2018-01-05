import { DetailSection } from './detailSection.class';

export class MainSection {

    private details: DetailSection[];
    private configuration;

    constructor(details: DetailSection[] = [], config: MainSectionConfig = new MainSectionConfig()) {
        this.details = details;
        this.configuration = config;
    }

    public addDetail(detail: DetailSection) {
        this.details.push(detail);
    }

}

export class MainSectionConfig {
    private className;

    constructor(className: string = 'mainSection') {
        this.className = className;
    }

}
