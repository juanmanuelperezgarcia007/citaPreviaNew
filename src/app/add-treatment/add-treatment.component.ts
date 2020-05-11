import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppConst } from '../constantes/appConst';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TreatmentService } from '../treatment.service';
import { TreatmentModel } from '../modelos/treatmentModel';


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
    cancel: AppConst.CANCEL,
    createtreatment: AppConst.CREATETREATMENT,
    duration: AppConst.DURATION
  };

  select = {
    hours: [0, 1, 2, 3, 4],
    minutes: [0, 15, 30, 45]
  };

  addForm: FormGroup;


  constructor(private treatmentService: TreatmentService) {

    this.addForm = new FormGroup({
      tittle: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      selectHour: new FormControl('', [Validators.required]),
      selectMinute: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.addForm.value);
    this.addTreatment(this.addForm.value);
  }

  addTreatment(treatmentForm) {

    const treatment: TreatmentModel = {
      tittle: treatmentForm.tittle,
      descripcion: treatmentForm.description,
      duration: {
        hours: treatmentForm.selectHour,
        minutes: treatmentForm.selectMinute
      },
      id: new Date().getMilliseconds()
    };

    this.treatmentService.addTreatment(treatment);
  }
}
