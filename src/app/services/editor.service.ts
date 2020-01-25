import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  public newContent: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }
}
