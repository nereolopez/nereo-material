import { Component, ViewChild } from '@angular/core';
import { BackdropComponent } from '../../projects/nm/src/public_api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(BackdropComponent)
  backdrop: BackdropComponent;

  isBackdropRevealed = false;
  isSearchMode = false;

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  revealBackdrop(){
    this.toggleBackdropRevealed();
    this.backdrop.reveal();
  }

  concealBackdrop() {
    this.toggleBackdropRevealed();
    this.isSearchMode = false;
    this.backdrop.conceal();
  }

  toggleBackdropRevealed(){
    this.isBackdropRevealed = !this.isBackdropRevealed;
  }

  setSearchMode(){
    this.isSearchMode = true;
  }
}

interface Section {
  name: string;
  updated: Date;
}
