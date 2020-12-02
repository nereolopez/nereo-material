import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nm-banner',
  template: `
  <mat-card *ngIf="show">
    <mat-card-content>
        <mat-list>
        <mat-list-item>
            <mat-icon matListIcon color="primary" *ngIf="icon">{{icon}}</mat-icon>
            <div id="banner-text-container">
                <p matLine>{{firstSentence}}</p>
                <p matLine *ngIf="secondSentence">{{secondSentence}}</p>
            </div>
        </mat-list-item>    
        </mat-list>
        <div id="banner-actions">
            <button mat-button color="primary" (click)="secondaryActionClicked()" *ngIf="secondaryActionText">{{secondaryActionText}}</button>  
            <button mat-button color="primary" (click)="mainActionClicked()">{{mainActionText}}</button>
        </div>
    </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
        height: 52px;
        padding: 0;
    }
    
    mat-card-content{
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 90%;
        flex-wrap: wrap;
    }
    
    #banner-text-container {
        margin-left: 24px;
    }

    #banner-text-container p{
        font-size: 14px;
        margin: 3px 0;
    }

    #banner-actions button{
        text-transform: uppercase !important;
    }
         
    mat-card-content,
    mat-list,
    mat-list-item {
        height: 100% !important;
        padding: 0;
    }

    .mat-list, .mat-list-item, .mat-list-text{
        flex-direction: row !important;
    }

    @media(max-width:959px){
        mat-card {
            height: 112px;
        }
        
        mat-card-content,
        mat-list,
        mat-list-item {
            height: auto !important;
            max-width: 100% !important;
            width: 100% !important;
        }    

        mat-list-item {
            margin: 12px 0 !important;
        }

        #banner-text-container {
            margin-left: 16px !important;
        }

        #banner-actions {
            justify-content: flex-end;
            display: flex;
            width: 100%;
        } 
    }
  `]
})
export class BannerComponent implements OnInit {

    @Input()
    show: boolean;

    @Input()
    icon: string;
  
    @Input()
    firstSentence: string;
  
    @Input()
    secondSentence: string;
  
    @Input()
    mainActionText: string;
  
    @Input()
    secondaryActionText: string;
  
    @Output()
    mainActionClick = new EventEmitter();
  
    @Output()
    secondaryActionClick = new EventEmitter();
  
    constructor() { }
  
    ngOnInit() {
    }
  
    mainActionClicked(){
      this.mainActionClick.emit();
    }
  
    secondaryActionClicked(){
      this.secondaryActionClick.emit();
    }
  }
