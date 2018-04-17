import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageDetailComponent } from './single-page-detail.component';

describe('SinglePageDetailComponent', () => {
  let component: SinglePageDetailComponent;
  let fixture: ComponentFixture<SinglePageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
