import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPieComponent } from './skill-pie.component';

describe('SkillPieComponent', () => {
  let component: SkillPieComponent;
  let fixture: ComponentFixture<SkillPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
