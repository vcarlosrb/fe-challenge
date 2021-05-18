import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AgencyRoutingModule } from './agency-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { AgencyComponent } from './agency.component';
import { AgencyListComponent } from './list/list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatListModule } from '@angular/material/list';
import { AgencyItemComponent } from './shared/components/agency-item/agency-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AgencyDetailComponent } from './detail/detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AgmCoreModule } from '@agm/core';

// Views
let views = [
    AgencyListComponent,
    AgencyDetailComponent
];

let components = [
    AgencyItemComponent
];

let ui_components = [
    NgxSpinnerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    declarations: [
        AgencyComponent,
        ...views,
        ...components
    ],
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB25SO2X9TtyqxEVvQvTd8qPGFnbikZ7wk'
        }),
        ReactiveFormsModule,
        AgencyRoutingModule,
        ComponentsModule,
        ui_components
    ]
})
export class AgencyModule {
    static pathName: string = '';
}
