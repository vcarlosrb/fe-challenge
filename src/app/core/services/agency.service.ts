import { Injectable } from '@angular/core';
import { AgencyModel } from '../models/agency.model';
import Agencies from "src/app/core/store/agencias.json";

@Injectable({
    providedIn: 'root'
})
export class AgencyService {
    localStorage: Storage;
    constructor() {
        this.localStorage = window.localStorage;
    }

    getAgencies(): AgencyModel[] {
        const agenciesFromStorage = this.getAgenciesFromStorage();
        if (agenciesFromStorage) {
            return agenciesFromStorage;
        } else {
            let agencies = Agencies.map((item: any) => {
                let agency = new AgencyModel();
                agency.id = item.id;
                agency.name = item.agencia;
                agency.district = item.distrito;
                agency.province = item.provincia;
                agency.department = item.departamento;
                agency.address = item.direccion;
                agency.lat = item.lat;
                agency.lon = item.lon;

                return agency;
            });
            this.saveAgencies(agencies);
            return agencies;
        }
    }

    saveAgencies(agencies: AgencyModel[]): void {
        this.localStorage.setItem('Agencies', JSON.stringify(agencies));
    }

    getAgenciesFromStorage(): AgencyModel[] | undefined {
        const agenciesString = this.localStorage.getItem('Agencies')
        if (agenciesString) return JSON.parse(agenciesString)
        else return undefined;
    }

    getAgencyById(id: number): AgencyModel {
        let agencies = this.getAgencies();
        const agencyFilter = <any>agencies.filter((item: any) => item.id === id);
        const result = agencyFilter[0];
        let agency = new AgencyModel();
        agency.id = result.id;
        agency.name = result.name;
        agency.district = result.district;
        agency.province = result.province;
        agency.department = result.department;
        agency.address = result.address;
        agency.lat = result.lat;
        agency.lon = result.lon;
        
        return agency
    }

    updateAgencyById(id: number, agency: AgencyModel): void {
        let agencies = this.getAgencies();
        agencies = agencies.map((item)=> {
            if (item.id === id) return agency
            else return item;
        });
        this.saveAgencies(agencies);
    }
}