import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLoginComponent } from './global-login.component';

describe('GlobalLoginComponent', () => {
  let component: GlobalLoginComponent;
  let fixture: ComponentFixture<GlobalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
