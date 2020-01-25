import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() row: any;

  constructor() { }

  ngOnInit() {
  }

  isHeader(type: string) {
    const headers = ['h1','h2','h3','h4','h5','h6'];
    return headers.includes(type);
  }

}
