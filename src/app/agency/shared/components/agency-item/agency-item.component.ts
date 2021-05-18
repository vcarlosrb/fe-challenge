import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AgencyModel } from 'src/app/core/models/agency.model';

@Component({
    selector: 'app-agency-item',
    templateUrl: './agency-item.component.html',
    styleUrls: ['./agency-item.component.scss']
})
export class AgencyItemComponent implements OnInit {
    @Input() agency: AgencyModel = new AgencyModel();
    constructor() { }

    ngOnInit(): void {
    }

}
