import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `
    <div fxLayout="row wrap">
      <div fxFlex.xs="50%" fxFlex="20%">
        Item 1
      </div>
      <div fxFlex.xs="50%" fxFlex="30%">
        Item 1 Value
      </div>

      <div fxFlex.xs="50%" fxFlex="20%">
        Item 2
      </div>
      <div fxFlex.xs="50%" fxFlex="30%">
        Item 2 Value
      </div>

      <div fxFlex.xs="50%" fxFlex="20%">
        Item 3
      </div>
      <div fxFlex.xs="50%" fxFlex="30%">
        Item 3 Value
      </div>

      <div fxFlex.xs="50%" fxFlex="20%">
        Item 4
      </div>
      <div fxFlex.xs="50%" fxFlex="30%">
        Item 4 Value
      </div>

      <div fxFlex.xs="50%" fxFlex="20%">
        Item 5
      </div>
      <div fxFlex.xs="50%" fxFlex="30%">
        Item 5 Value
      </div>

      <div fxFlex.xs="50%" fxFlex="20%">
        Item 6
      </div>
      <div fxFlex.xs="50%" fxFlex="30%">
        Item 6 Value
      </div>
    </div>
  `
})
export class LazyComponent {}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}
