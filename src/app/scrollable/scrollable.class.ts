import { MainSection } from './mainSection.class';

export class Scrollable {

    private sections: MainSection[];

    overflowStatus: string = "hidden";

    constructor(sections: MainSection[] = []) {
        this.sections = sections;
    }

    addSection(section: MainSection) {
        this.sections.push(section);
    }

    setOverflowScroll() {
        this.overflowStatus = "scroll";
    }

    setOverflowHidden() {
        this.overflowStatus = "hidden";
    }
}
