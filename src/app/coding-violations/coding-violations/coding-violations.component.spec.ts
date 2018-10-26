import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingViolationsComponent } from './coding-violations.component';

describe('CodingViolationsComponent', () => {
  let component: CodingViolationsComponent;
  let fixture: ComponentFixture<CodingViolationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingViolationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingViolationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
