import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private _firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this._firebaseAuth.auth.signInAnonymously();
  }
}
