import { Component, OnInit } from '@angular/core';
import { AppConst } from '../constantes/appConst';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  msg = {
    title: AppConst.TITLE,
    appointment: AppConst.APPOINTMENT,
    treatments: AppConst.TREATMENTS,
  };
  constructor(router: Router) { }

  ngOnInit() {
  }

}
