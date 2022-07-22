import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUnitDetail } from 'src/app/models/unitDetail.dto';
import { IFilter } from 'src/app/models/unitsData.dto';
import { UnitsService } from 'src/app/services/units.service';
import { changeTitle } from 'src/app/stateManagement/pageTitle.actions';

@Component({
  selector: 'app-units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.scss']
})
export class UnitsPageComponent implements OnInit {
  public unitsData: Array<IUnitDetail> = [];
  public filter: IFilter = {};
  public woodDisabled: boolean = true;
  public foodDisabled: boolean = true;
  public goldDisabled: boolean = true;
  constructor(private store: Store<{ title: string }>, private unitsService: UnitsService) { 
    this.store.dispatch(changeTitle({value: 'Units'}));
  }

  ngOnInit(): void {
    this.loadData();
  }
  public addFilter (type:string, value:Number | string): void {
    switch(type){
      case "age":
        this.filter.age = Number(value);
        break;
      default:
        break;  
    }
    this.loadData(this.filter);
  }

  private loadData(filter?: any): void {
    this.unitsService.getUnits(filter).subscribe((data: Array<IUnitDetail> | undefined) => {
      this.unitsData = (data) ? data : [];
    })
  }
  public rangeCheckboxChange(type: string): void {
    switch(type) {
      case ('wood'):
        this.woodDisabled = !this.woodDisabled;
        this.filter.wood = 200;
        break;
      case ('food'):
        this.foodDisabled = !this.foodDisabled;
        this.filter.food = 200;
        break;
      case ('gold'):
        this.goldDisabled = !this.goldDisabled;
        this.filter.gold = 200;
        break;  
      default:
        break;
    }
    this.loadData(this.filter);
  }
  public rangeSliderChange(event: Event): void {
    switch((event.target as HTMLInputElement).id) {
      case('woodFilter'):
        this.filter.wood = Number((event.target as HTMLInputElement).value);
        break;
      case('foodFilter'):
        this.filter.food = Number((event.target as HTMLInputElement).value);
        break;
      case('goldFilter'):
        this.filter.gold = Number((event.target as HTMLInputElement).value);
        break;
      default:
        break;
    }
    this.loadData(this.filter);
  }
}
