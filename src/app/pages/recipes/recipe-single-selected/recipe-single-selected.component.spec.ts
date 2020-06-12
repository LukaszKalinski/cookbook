import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSingleSelectedComponent } from './recipe-single-selected.component';

describe('RecipeSingleSelectedComponent', () => {
  let component: RecipeSingleSelectedComponent;
  let fixture: ComponentFixture<RecipeSingleSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSingleSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSingleSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
