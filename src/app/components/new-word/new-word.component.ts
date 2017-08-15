import { Component, ViewChild } from '@angular/core';
import { CanDeactivateGuardService } from '../../service/can-deactivate-guard.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.css']
})
export class NewWordComponent {

  constructor(CanDeactivateGuard: CanDeactivateGuardService) { }

  @ViewChild('form')
  public form: FormComponent;
}
