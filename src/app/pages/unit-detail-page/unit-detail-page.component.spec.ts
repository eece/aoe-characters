import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";

import { UnitDetailPageComponent } from './unit-detail-page.component';
import { FilterAgeButtonComponent } from 'src/app/components/filter-age-button/filter-age-button.component';
import { LabelValueItemComponent } from 'src/app/components/label-value-item/label-value-item.component';

describe('UnitDetailPageComponent', () => {
  let component: UnitDetailPageComponent;
  let fixture: ComponentFixture<UnitDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitDetailPageComponent, FilterAgeButtonComponent, LabelValueItemComponent ],
      providers: [provideMockStore({})],
      imports:[HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
