import { Component, OnInit, Input } from '@angular/core';
import { TreatmentModel } from '../modelos/treatmentModel';
import { AppConst } from '../constantes/appConst';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  msg = {
    add: AppConst.ADDTREATMENT,
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

  treatment: TreatmentModel;
  treatments: TreatmentModel[] = [];

  constructor(
    private treatmentService: TreatmentService
    ) {
    this.getTreatment();
  }

  ngOnInit() {

  }
  deleteAndGetTreatment(id) {
    this.deleteTreatment(id);
    this.getTreatment();
  }

  deleteTreatment(id) {
    this.treatmentService.deleteTreatment(id);
  }

  getTreatment() {
    this.treatments = this.treatmentService.getTreatment();
  }


  importTreatment(description, duration, id, tittle) {
    this.treatment = {
      descripcion: description,
      duration,
      id,
      tittle
    };
  }

}
