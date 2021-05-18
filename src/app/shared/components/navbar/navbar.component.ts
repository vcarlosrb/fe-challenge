import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
    @Input() backButton: boolean = false;
    @Input() title: string = '';
    constructor() { }

    ngOnInit(): void {
    }

}
