import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class ScrollableService {
    isEnabled = new EventEmitter<boolean>(false);
}