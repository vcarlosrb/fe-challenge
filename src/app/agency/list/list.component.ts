import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyModel } from 'src/app/core/models/agency.model';
import { AgencyService } from 'src/app/core/services/agency.service';
import { AgencyDetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-agency-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AgencyListComponent implements OnInit {
  agencies: AgencyModel[] = [];
  static pathName: string = '';
  constructor(
    private agencyService: AgencyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAgencies();
  }

  getAgencies(): void {
    this.agencies = this.agencyService.getAgencies();
  }

  goToAgencyDetailt(agency: AgencyModel): void {
    this.router.navigate([AgencyDetailComponent.pathName, agency.id]);
  }
}
