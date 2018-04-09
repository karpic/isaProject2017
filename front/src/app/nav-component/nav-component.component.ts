import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    this.router.navigate(['login']);

  }

}
