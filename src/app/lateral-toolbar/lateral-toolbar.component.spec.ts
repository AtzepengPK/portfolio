import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralToolbarComponent } from './lateral-toolbar.component';

describe('LateralToolbarComponent', () => {
  let component: LateralToolbarComponent;
  let fixture: ComponentFixture<LateralToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
