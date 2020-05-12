import { Injectable } from '@angular/core';
import { TreatmentModel } from './modelos/treatmentModel';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  treatments: TreatmentModel[] = [
    { tittle: 'Corte de pelo infantil', descripcion: 'Corte de pelo para niños menores de 12 años', duration: { hours: 2, minutes: 45 }, id: 0 },
    { tittle: 'Corte de pelo adulto', descripcion: 'Corte de pelo para niños mayores de 12 años', duration: { hours: 1, minutes: 30 }, id: 1 },
    { tittle: 'Corte de pelo adulto', descripcion: 'Corte de pelo para niños mayores de 12 años', duration: { hours: 0, minutes: 45 }, id: 2 },
    { tittle: 'Corte de pelo adulto', descripcion: 'Corte de pelo para niños mayores de 12 años', duration: { hours: 0, minutes: 60 }, id: 3 },

  ];


  constructor() {
  }

  getTreatment() {
    return this.treatments;
  }

  deleteTreatment(id) {
    this.treatments.splice(id, 1);
  }

  modifyTreatment(treatment) {
    console.log(treatment);
  }

  addTreatment(treatment) {
    console.log(treatment);
  }
}
