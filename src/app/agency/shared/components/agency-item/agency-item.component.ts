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
    agencyImages: string[] = [
        'assets/images/agencia1.jpeg',
        'assets/images/agencia2.jpeg',
        'assets/images/agencia3.jpeg',
        'assets/images/agencia4.jpeg',
        'assets/images/agencia5.jpeg',
    ];
    constructor() { }

    ngOnInit(): void {
        this.agency.image = this.agencyImages[Math.floor(Math.random() * this.agencyImages.length)];
    }

}
