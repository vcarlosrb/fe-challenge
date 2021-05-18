import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyModel } from 'src/app/core/models/agency.model';
import { AgencyService } from 'src/app/core/services/agency.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {
  static pathName: string = 'agency';
  lon = -77.01232817;
  lat = -12.0046896;
  agencyId: number = NaN;
  agency: AgencyModel = new AgencyModel();
  agencyForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    district: new FormControl('', [
      Validators.required
    ]),
    province: new FormControl('', [
      Validators.required
    ]),
    department: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    lon: new FormControl('', [
      Validators.required
    ]),
    lat: new FormControl('', [
      Validators.required
    ])
  });
  constructor(
    private agencyService: AgencyService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.agencyId = parseInt(params['id']);
      this.getAgencyDetail(this.agencyId);
    });
  }

  getAgencyDetail(id: number): void {
    this.agency = this.agencyService.getAgencyById(id);
    this.setOriginalValues(this.agency);
  }

  setOriginalValues(agency: AgencyModel): void {
    this.agencyForm.setValue({
      name: agency.name,
      address: agency.address,
      district: agency.district,
      province: agency.province,
      department: agency.department,
      lat: agency.lat,
      lon: agency.lon
    })
  }

  updateAgency(agencyForm: any): void {
    let agency = new AgencyModel();
    agency.id = this.agencyId;
    agency.name = agencyForm.name;
    agency.address = agencyForm.address;
    agency.district = agencyForm.district;
    agency.province = agencyForm.province;
    agency.department = agencyForm.department;
    agency.lat = agencyForm.lat;
    agency.lon = agencyForm.lon;

    this.agencyService.updateAgencyById(this.agencyId, agency);
    this.notificationService.successNotification('Agencia actualizada');
  }
}
