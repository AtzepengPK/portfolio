import { DetailSection } from './detailSection.class';

export class MainSection {

    private content: string;
    private details: DetailSection[];
    private configuration;

    constructor(content: string, details: DetailSection[] = [], config: MainSectionConfig = new MainSectionConfig()) {
        this.content = content;
        this.details = details;
        this.configuration = config;
    }

    public addDetail(detail: DetailSection) {
        this.details.push(detail);
    }
}

export class MainSectionConfig {
    private contentClassName;

    constructor(contentClassName: string = 'mainContent') {
        this.contentClassName = contentClassName;
    }
}
