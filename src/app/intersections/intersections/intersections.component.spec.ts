import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionsComponent } from './intersections.component';

describe('IntersectionsComponent', () => {
  let component: IntersectionsComponent;
  let fixture: ComponentFixture<IntersectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
