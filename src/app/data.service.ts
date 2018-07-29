import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private scrollableObservable: Observable<{}[]>;
  private menuItems: Observable<{}[]>;

  constructor(private db: AngularFireDatabase) {
    this.scrollableObservable = this.db.list('/scrollable').valueChanges();
    this.menuItems = this.db.list('/menu').valueChanges();
  }

  getScrollable(): Observable<{}[]> {
    return this.scrollableObservable;
  }

  getMenuItems(): Observable<{}[]> {
    return this.menuItems;
  }

  getRadius(){
    let array = this.scrollableObservable.subscribe(x =>{
      x.map((el:any) => {
        el.sections.map(section =>{
          console.log(section.rate)
        })
      })
    })
  }

}
