import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgencyComponent } from './agency.component';
import { AgencyDetailComponent } from './detail/detail.component';
import { AgencyListComponent } from './list/list.component';

const routes: Routes = [
    {
        path:  AgencyComponent.pathName,
        component: AgencyComponent,
        children: [
            {
                path: AgencyListComponent.pathName,
                component: AgencyListComponent
            },
            {
                path: AgencyDetailComponent.pathName + '/:id',
                component: AgencyDetailComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: AgencyListComponent.pathName
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgencyRoutingModule { }