import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-age-button',
  templateUrl: './filter-age-button.component.html',
  styleUrls: ['./filter-age-button.component.scss']
})
export class FilterAgeButtonComponent implements OnInit {
  @Input() age: Number = 0;
  @Input() currentAge: Number = 0;
  @Input() label?: String;
  @Output() addFilter = new EventEmitter<Number>();
  constructor() { }

  ngOnInit(): void {
  }

  public onFilterClick(age: Number): void {
    this.addFilter.emit(age);
  }

}
