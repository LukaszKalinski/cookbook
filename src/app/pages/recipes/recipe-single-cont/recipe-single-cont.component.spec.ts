import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSingleContComponent } from './recipe-single-cont.component';

describe('RecipeSingleContComponent', () => {
  let component: RecipeSingleContComponent;
  let fixture: ComponentFixture<RecipeSingleContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSingleContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSingleContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
