import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTitle } from 'src/app/stateManagement/pageTitle.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeImagePath: string = '';
  constructor(private store: Store<{ title: string }>) { 
    this.store.dispatch(changeTitle({value: 'Home'}));
  }

  ngOnInit(): void {
    this.homeImagePath =  '../../assets/images/home.jpeg';
  }

}
