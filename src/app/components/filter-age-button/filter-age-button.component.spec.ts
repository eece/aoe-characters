import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAgeButtonComponent } from './filter-age-button.component';

describe('FilterAgeButtonComponent', () => {
  let component: FilterAgeButtonComponent;
  let fixture: ComponentFixture<FilterAgeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAgeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAgeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
