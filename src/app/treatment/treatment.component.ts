import { Component, OnInit, Input } from '@angular/core';
import { TreatmentModel } from '../modelos/treatmentModel';
import { AppConst } from '../constantes/appConst';

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

  treatments: TreatmentModel[] = new Array();


  constructor() {

    this.treatments = [
      { tittle: 'Corte de pelo infantil', descripcion: 'Corte de pelo para niños menores de 12 años', duration: { hours: 0, minutes: 45 }, id: 0 },
      { tittle: 'Corte de pelo adulto', descripcion: 'Corte de pelo para niños mayores de 12 años', duration: { hours: 0, minutes: 90 }, id: 1 },
      { tittle: 'Corte de pelo adulto', descripcion: 'Corte de pelo para niños mayores de 12 años', duration: { hours: 0, minutes: 66 }, id: 2 },
      { tittle: 'Corte de pelo adulto', descripcion: 'Corte de pelo para niños mayores de 12 años', duration: { hours: 0, minutes: 89 }, id: 3 },

    ];
  }

  ngOnInit() {
  }
  deleteTreatment(id) {
    this.treatments.splice(id, 1);
  }

  addTreatment() {

  }
}
