import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  rows$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  defaultRows = [
    {
      columns: [
        {
          id: 1,
          content: [
            {
              type: 'p',
              text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic, enim modi quasi corporis, 
                      dicta obcaecati eum aspernatur neque tempora totam aut minima provident qui, quam debitis itaque quos officia.`
            }
          ]
        }
      ]
    },
    {
      columns: [
        {
          id: 2,
          content: [
            {
              type: 'p',
              text: 'abcd'
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              type: 'h1',
              text: 'abcd'
            },
            {
              type: 'h2',
              text: 'abcd'
            },
            {
              type: 'p',
              text: 'abcdsdfsdfdsf'
            }
          ]
        }
      ]
    }
  ];

  constructor() {
    this.rows$.next(this.defaultRows);
  }

  addRow() {
    this.defaultRows.push( { columns: [] });
    this.rows$.next(this.defaultRows);
  }
}
