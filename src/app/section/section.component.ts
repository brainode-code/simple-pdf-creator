import { Component, OnInit } from '@angular/core';
import { EditorService } from '../services/editor.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  editMode = null;
  model = 'abcd';

  constructor(private editorService: EditorService) { }

  ngOnInit() {
  }

  add() {
    this.editorService.newContent.next(`<p>${this.model}</p>`);
  }

}
