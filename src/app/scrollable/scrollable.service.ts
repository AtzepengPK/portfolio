import { Injectable, EventEmitter, AfterViewInit } from '@angular/core';

@Injectable()
export class ScrollableService {

    isEnabled = new EventEmitter<boolean>(false);
    private current: boolean;

    constructor() {
        this.isEnabled.subscribe(x => {
            this.current = x;
        });
    }

    disable() {
        this.isEnabled.emit(false);
        console.log(this.current);
    }

    enable() {
        this.isEnabled.emit(true);
        console.log(this.current);
    }

    toogle() {
        this.isEnabled.emit(!this.current);
    }
}
