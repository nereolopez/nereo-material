import { Component, ViewChild } from '@angular/core';
import { ActionElement, ContextualToolbarComponent } from 'projects/nm/src/public_api';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ContextualToolbarComponent) 
  contextualToolbar: ContextualToolbarComponent;

  selectedItems: number = 0;
  approvedElements: number = 0;
  actions: ActionElement[] = ACTIONS;
  moreActions: ActionElement[] = MORE_ACTIONS;
  progressSubscription: Subscription;

  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  selection = new SelectionModel<any>(true, []);

  constructor(){}
  
  ngOnInit(){
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void{
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  actionSelected(action: ActionElement): void{
    console.log("App Component: ", action);
    if (action.name == 'done') {
      this.showProgress();
    }
  }

  clearSelection(): void{
    this.selection.clear();
  }

  showProgress(): void{
    this.approvedElements = 0;
    this.progressSubscription = interval(1000).subscribe(() => {
      this.contextualToolbar.setProgress(
        `Approved ${this.approvedElements} of ${this.selection.selected.length} elements. Please wait...`
        );
        this.stopProgress();
        this.approvedElements++;
      });
  }

  stopProgress() {
    if (this.approvedElements == this.selection.selected.length + 1) {
      this.progressSubscription.unsubscribe(); 
      this.contextualToolbar.stopProgress(); 
    }
  }
}

const ACTIONS: any[] = [
  {
    name: 'done',
    icon: 'done'
  },
  {
    name: 'copy',
    icon: 'file_copy'
  },
  {
    name: 'share',
    icon: 'share',
  }
];

const MORE_ACTIONS: any[] = [
  {
    name: 'delete'
  }
]

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];