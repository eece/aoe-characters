import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute image', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.home-image')?.getAttribute('src')).toEqual('../../assets/images/home.jpeg');
  });
  
  it('should load image', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    let ele = document.createElement("img"); 
    ele.src = '../../assets/images/home.jpeg', 
    setTimeout(() => { 
      expect(ele.height).toBeGreaterThan(0);
      expect(ele.width).toBeGreaterThan(0);
    }, 5000);
  });

});
