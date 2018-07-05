## Introduction
This project contains [Material Design](https://material.io/design/) components built with Angular and Angular Material. Its goal is to provide components that are not yet implemented in [Angular Material](https://material.angular.io/). 

It follows the Angular Material project approach, meaning that each component will be inside of its own module, so that you only have to import the one you are interested in, and not the whole library.

Feel free to follow and/or contribute to [the project](https://github.com/nereolopez/nereo-material).

## Add it to your project

### Step 1. Install the npm package
Inside of your Angular project, run the following command:

```
npm install nereo-material --save 
```

### Step 2. Add Dependencies
- In order to have the [Material Icons](https://material.io/tools/icons/) displayed correctly, make sure to add them by including the following line in your `index.html` file:
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
- Import the `BrowserAnimationsModule` into your `AppModule`.
```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    // your components here
  ],
  imports: [
    // your imports here 
    BrowserAnimationsModule,
    
  ],
  providers: [ 
    // your providers here 
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
```

- Install Angular Material
```
npm install --save @angular/material @angular/cdk
```

- Add an Angular Material theme. You can create one ([learn how](https://material.angular.io/guide/theming)) or import an existing one by adding it in your `styles.scss` file as follows:
```css
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
```

## Available Components

### Contextual Toolbar
This component is what is referred to as the [Contextual Action Bar](https://material.io/design/components/app-bars-top.html#usage) in Material Design docs. See the image below to understand it easily:

![Contextual Action Bar](https://material.io/design/assets/1sej9Nb4bY284xcA-oF5k_mgyTMxWN_2q/topappbars-contextual.png)
*Image from Material Design documentation site*

Whenever you have items selected, no matter what they are, it will position itself covering the default `MatToolbar` offering the actions you need it to.

#### API Reference

```
import { ContextualToolbarModule } from 'nereo-material';
```

#### Properties
| Name                                                      | Description  |
|---|---|
| @Input() count: number                                    | Receives the number of items that have been selected  |
| @Input() actions: any                                     | Receives an array of actions to be displayed in the right corner. [See below what an action looks like](#actions)  |
| @Input() moreActions: any                                 | Receives an array of additional actions that will be shown as a menu under the `more` button that will be automatically created. [See below what an additional action looks like](#more-actions) |
| @Input() contextualizeTo: string | Contextualizes the toolbar either to the `page` or to the parent `card`. It is defaulted to `page` mode. [See below the different contextualizations it can have](#contextualization) |
| @Output() selectedAction = new EventEmitter<string>();    | Emits an event with the name of the selected action so that you can process it. |
| @Output() clearSelection = new EventEmitter();            | Emits an event when the clear button (on the left side) is clicked.  |


#### Actions
The `actions` property receives an array of actions. This is what it expects as an action:

```ts
{
    name: 'copy',
    icon: 'file_copy'
}
```

#### More Actions
When more actions are passed to the Contextual Toolbar, a `more` button will be created as the last icon button in the toolbar. All these additional actions will be placed as a menu that will be displayed when clicking on this button. This is what the `moreActions` property is expecting:

```ts
{
  name: 'delete'
}
```

#### Contextualization
The Contextual Toolbar gives actions related to the selected content. It can currently be contextualized to the page (which will cover the main toolbar of the application on the top) or to the parent card (it will occupy the parent card's header - **be aware that the parent card has to have its `position: relative` in order to display the toolbar correctly, which would be placed inside the card's content**).

You can use the [`contextualizeTo` property](#properties) with the values `page` or `card`.

#### Using Contextual Toolbar

Add it to as shown below components where you will have selections:

```html
<nm-contextual-toolbar [count]="selection.selected.length"
                       [actions]="actions"
                       [moreActions]="moreActions"
                       [contextualizeTo]="'card'"
                       (selectedAction)="actionSelected($event)"
                       (clearSelection)="clearSelection()"></nm-contextual-toolbar>
```

Note that the `ContextualToolbarComponent` itself does not do any action, but notifies you instead. This means that you need to listen to the events it emits and take action. For instance, when the component emits the `clearSelection` event, you will need to clear the selection on your component. In this way, when the `count` is 0, the `ContextualToolbarComponent` will dissappear.

#### Contextual Toolbar Demo
Check the [demo code](https://github.com/nereolopez/nereo-material-demo/tree/master/src/app/contextual-toolbar-demo) to see how to use the component and the [demo page](https://nereo-material-demo.firebaseapp.com/contextual-toolbar) to see how it looks like.