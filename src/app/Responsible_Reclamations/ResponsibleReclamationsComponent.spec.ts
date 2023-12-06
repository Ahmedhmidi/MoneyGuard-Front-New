import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSolutionsComponent } from './.component';

describe('UserSolutionsComponent', () => {
  let component: UserSolutionsComponent;
  let fixture: ComponentFixture<UserSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
