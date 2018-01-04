import { MainSection } from './mainSection.class';

export class Scrollable {

    private sections: MainSection[];

    constructor(sections: MainSection[] = []) {
        this.sections = sections;
    }

    addSection(section: MainSection) {
        this.sections.push(section);
    }

}
