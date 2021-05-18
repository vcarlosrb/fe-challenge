import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'challenge';
  show: boolean = true;
  ngOnInit(): void {
    setTimeout(()=> {
      this.show = false;
    }, 2000);
  }
}
