import { Component, OnInit } from '@angular/core';
import { AppConst } from '../constantes/appConst';

@Component({
  selector: 'app-edit-treatment',
  templateUrl: './edit-treatment.component.html',
  styleUrls: ['./edit-treatment.component.css']
})
export class EditTreatmentComponent implements OnInit {

  msg = {
    add: AppConst.ADDTREATMENT,
    edit: AppConst.EDITTREATMENT,
    treatment: AppConst.TREATMENT,
    introduceAtreatment: AppConst.INTRODUCETREATMENT,
    description: AppConst.DESCRIPTION,
    introduceDescription: AppConst.INTRODUCEDESCRIPTION,
    hours: AppConst.HOURS,
    minutes: AppConst.MINUTES,
    cancel: AppConst.CANCEL,
    createtreatment: AppConst.CREATETREATMENT,
    duration: AppConst.DURATION
  };

  select = {
    hours: [1, 2, 3, 4],
    minutes: [0, 15, 30, 45]
  };

  constructor() { }

  ngOnInit() {
  }

}
