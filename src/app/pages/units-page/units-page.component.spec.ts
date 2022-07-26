import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientModule } from '@angular/common/http';
import { FilterAgeButtonComponent } from 'src/app/components/filter-age-button/filter-age-button.component';
import { UnitsPageComponent } from './units-page.component';
import { LabelValueItemComponent } from 'src/app/components/label-value-item/label-value-item.component';

describe('UnitsPageComponent', () => {
  let component: UnitsPageComponent;
  let fixture: ComponentFixture<UnitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsPageComponent, FilterAgeButtonComponent, LabelValueItemComponent ],
      providers: [provideMockStore({})],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
