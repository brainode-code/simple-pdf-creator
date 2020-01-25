import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { CanvasComponent } from './canvas/canvas.component';
import { SectionComponent } from './section/section.component';
import { FormsModule } from '@angular/forms';
import { ParagraphComponent } from './elements/paragraph/paragraph.component';
import { HeaderComponent } from './elements/header/header.component';
import { RowComponent } from './elements/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    CanvasComponent,
    SectionComponent,
    ParagraphComponent,
    HeaderComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
