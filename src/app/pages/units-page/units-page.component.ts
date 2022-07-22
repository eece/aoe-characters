import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUnitDetail } from 'src/app/models/unitDetail.dto';
import { UnitsService } from 'src/app/services/units.service';
import { changeTitle } from 'src/app/stateManagement/pageTitle.actions';

@Component({
  selector: 'app-units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.scss']
})
export class UnitsPageComponent implements OnInit {
  public unitsData: Array<IUnitDetail> = [];
  constructor(private store: Store<{ title: string }>, private unitsService: UnitsService) { 
    this.store.dispatch(changeTitle({value: 'Units'}));
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(filter?: any): void {
    this.unitsService.getUnits().subscribe((data: Array<IUnitDetail> | undefined) => {
      this.unitsData = (data) ? data : [];
    })
  }
}
