import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActionElement } from '../../public_api';
import { ContextualToolbarDisplayMode } from '../model/model';

@Component({
  selector: 'nm-contextual-toolbar',
  templateUrl: './contextual-toolbar.component.html',
  styleUrls: ['./contextual-toolbar.component.scss']
})
export class ContextualToolbarComponent implements OnInit {

  @Input() count:  number;

  @Input() actions: ActionElement[];

  @Input() displayMode: ContextualToolbarDisplayMode = ContextualToolbarDisplayMode.icons;

  @Input() moreActions: ActionElement[];

  @Input() contextualizeTo: string;

  @Output() selectedAction = new EventEmitter<ActionElement>();

  @Output() clearSelection = new EventEmitter();

  classesToApply = { };

  progressMessage : BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  ngOnInit() {
    this.setContextualization();
  }

  showButtonIcon() {
    return this.displayMode != ContextualToolbarDisplayMode.text;
  }

  showButtonText() {
    return this.displayMode != ContextualToolbarDisplayMode.icons;
  }

  private setContextualization(){
    this.classesToApply = {
      'page-contextual-toolbar': this.contextualizeTo != 'card',
      'card-contextual-toolbar': this.contextualizeTo == 'card'  
    }
  }

  public setProgress(progressMessage: string) {
    this.progressMessage.next(progressMessage);
  }

  public stopProgress() {
    this.progressMessage.next(null);
  }

  actionSelected(action: ActionElement): void{
    this.selectedAction.emit(action);
  }

  clear(): void{
    this.clearSelection.emit();
  }

}
