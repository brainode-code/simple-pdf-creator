import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Content, ContentService } from '../services/content.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  rows$: Observable<any[]>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.rows$ = this.contentService.rows$;
  }

  addRow() {
    this.contentService.addRow();
  }

}
