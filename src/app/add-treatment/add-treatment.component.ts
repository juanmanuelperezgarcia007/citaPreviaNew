import { Component, OnInit } from '@angular/core';
import { AppConst } from '../constantes/appConst';

@Component({
  selector: 'app-add-treatment',
  templateUrl: './add-treatment.component.html',
  styleUrls: ['./add-treatment.component.css']
})
export class AddTreatmentComponent implements OnInit {

  msg = {
    add: AppConst.ADDTREATMENT,
    treatment: AppConst.TREATMENT,
    introduceAtreatment: AppConst.INTRODUCETREATMENT,
    description: AppConst.DESCRIPTION,
    introduceDescription: AppConst.INTRODUCEDESCRIPTION,
    hours: AppConst.HOURS,
    minutes: AppConst.MINUTES,
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
