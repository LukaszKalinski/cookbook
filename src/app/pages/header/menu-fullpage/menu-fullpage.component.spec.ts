import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFullpageComponent } from './menu-fullpage.component';

describe('MenuFullpageComponent', () => {
  let component: MenuFullpageComponent;
  let fixture: ComponentFixture<MenuFullpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFullpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFullpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
