import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({})
  projectStatuses: string[] = ['Stable', 'Critical', 'Finished'];
  forbiddenName: string[] = ['Test', 'test'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'project_name': new FormControl(null,[ Validators.required, this.restrictedName.bind(this)]),
      'email': new FormControl(null, Validators.email),
      'status': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.signupForm.controls);
  }

  restrictedName(control: FormControl): { [s: string]: boolean} | null {
    if (this.forbiddenName.indexOf(control.value) !== -1) {
      return { nameIsRestricted: true }
    }
    return null;
  }



}
