import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueItemComponent } from './label-value-item.component';

describe('LabelValueItemComponent', () => {
  let component: LabelValueItemComponent;
  let fixture: ComponentFixture<LabelValueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelValueItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelValueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
