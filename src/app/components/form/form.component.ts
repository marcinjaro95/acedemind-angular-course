import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormData} from "../models/form-data";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('form') signupForm : NgForm | undefined;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro']
  model: FormData = { email : '', subscription: this.subscriptions[1], password: ''};
  isSubmitted: boolean = false;

  onSubmit() {
    console.log(this.signupForm)
    this.isSubmitted = true;
  }

}
