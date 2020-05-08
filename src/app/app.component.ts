import { Component } from '@angular/core';
import { AppConst } from './constantes/appConst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = AppConst.TITLE;
}
