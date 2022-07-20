import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-value-item',
  templateUrl: './label-value-item.component.html',
  styleUrls: ['./label-value-item.component.scss']
})
export class LabelValueItemComponent implements OnInit {

  constructor() { }
  @Input() label: string|undefined;
  @Input() value: string|undefined;

  ngOnInit(): void {
  }

}
