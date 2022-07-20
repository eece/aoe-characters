import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTitle } from './stateManagement/pageTitle.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title$: Observable<string>;
  title = 'aeo-characters';
  constructor(private store: Store<{ title: string }>) {
    this.title$ = store.select('title');
  }

  onNavClick(title: string):void {
    this.store.dispatch(changeTitle({value: title}));
  }
}
