import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeContComponent } from './welcome-cont.component';

describe('WelcomeContComponent', () => {
  let component: WelcomeContComponent;
  let fixture: ComponentFixture<WelcomeContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
