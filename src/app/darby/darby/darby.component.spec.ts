import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarbyComponent } from './darby.component';

describe('DarbyComponent', () => {
  let component: DarbyComponent;
  let fixture: ComponentFixture<DarbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
