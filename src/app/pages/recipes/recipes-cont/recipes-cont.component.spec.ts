import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesContComponent } from './recipes-cont.component';

describe('RecipesContComponent', () => {
  let component: RecipesContComponent;
  let fixture: ComponentFixture<RecipesContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
