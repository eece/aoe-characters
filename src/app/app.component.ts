import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
}
