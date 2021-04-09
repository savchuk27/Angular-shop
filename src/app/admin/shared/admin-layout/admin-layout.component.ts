import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styles: [
  ]
})
export class AdminLayoutComponent implements OnInit {


  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout($event){
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

}
