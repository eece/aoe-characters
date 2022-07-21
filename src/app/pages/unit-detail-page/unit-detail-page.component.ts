import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTitle } from 'src/app/stateManagement/pageTitle.actions';

@Component({
  selector: 'app-unit-detail-page',
  templateUrl: './unit-detail-page.component.html',
  styleUrls: ['./unit-detail-page.component.scss']
})
export class UnitDetailPageComponent implements OnInit{

  constructor(private store: Store<{ title: string }>) {
    this.store.dispatch(changeTitle({value: 'Unit Details'}));
   }

  ngOnInit(): void {
  }

}
