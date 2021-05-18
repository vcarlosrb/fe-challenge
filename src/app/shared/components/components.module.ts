import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BackButtonComponent } from './back-button/back-button.component';
import { NavBarComponent } from './navbar/navbar.component';

let components = [
  BackButtonComponent,
  NavBarComponent
];

let ui_components = [
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ...ui_components
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }