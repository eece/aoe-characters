import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUnitDetail } from 'src/app/models/unitDetail.dto';
import { UnitsService } from 'src/app/services/units.service';
import { changeTitle } from 'src/app/stateManagement/pageTitle.actions';

@Component({
  selector: 'app-unit-detail-page',
  templateUrl: './unit-detail-page.component.html',
  styleUrls: ['./unit-detail-page.component.scss']
})
export class UnitDetailPageComponent implements OnInit{
  public unit: any; 
  constructor(private store: Store<{ title: string }>, 
    private unitService: UnitsService,
    private activatedRoute: ActivatedRoute) {
    this.store.dispatch(changeTitle({value: 'Unit Details'}));
  }

  ngOnInit(): void {
      const id: Number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.unitService.getUnitById(id).subscribe((data: IUnitDetail | undefined) => {
        this.unit = data;
      });
  }
}
