import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  path: string = '/auth';
  constructor(private router: Router) {
    this.router.events.subscribe((event: NavigationStart)=>{
      this.path = location.pathname;
    });
  }

}
