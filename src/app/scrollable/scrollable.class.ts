import { MainSection } from './mainSection.class';

export class Scrollable {

    private sections: MainSection[];

    overflowStatus: string = this.getOverflowStatus();
    color: string = this.getColor();

    constructor(sections: MainSection[] = []) {
        this.sections = sections;
    }

    addSection(section: MainSection) {
        this.sections.push(section);
    }

    getOverflowStatus(): string {
        return 'scroll';
    }

    getColor(): string {
        return 'red';
    }

}
