import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDetailPageComponent } from './unit-detail-page.component';

describe('UnitDetailPageComponent', () => {
  let component: UnitDetailPageComponent;
  let fixture: ComponentFixture<UnitDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitDetailPageComponent ]
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
